import { useRouter } from 'next/router';
import { Button } from '@app/ui/components/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@app/ui/components/dialog';
import { apiHandler } from '@app/config';
import { toast } from 'sonner';

type IModal = {
    isOpen: boolean;
    onClose: () => void;
};

export const DeleteModal = ({ isOpen, onClose }: IModal) => {
    const router = useRouter();

    const handleDeleteClick = async () => {
        try {
            const { data } = await apiHandler.delete('/org/delete', {
                data: { organizationId: router.query?.id },
            });
            if (!data.ok) {
                throw new Error();
            }
            onClose();
            toast.success('org has been deleted');
            router.push('/org');
        } catch {
            toast.error('could not delete org');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[325px] md:w-auto ">
                <DialogHeader>
                    Delete Org
                    <DialogDescription className="mt-3">
                        Are you sure You want to delete the organisation ? you can&apos;t undo this
                        action afterwards.
                        <div className="flex justify-end space-x-2 mt-5">
                            <Button
                                className="bg-[#dad6e2] px-5 py-2 rounded-sm text-[black] hover:text-[#888888] hover:bg-[#E5E2E8]  border-[1.4px] hover:border-[#CCCCCC]"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="text-[white] bg-[#ed0000]  border-[1.4px] hover:bg-[#c60000]  "
                                onClick={handleDeleteClick}
                            >
                                Delete
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
