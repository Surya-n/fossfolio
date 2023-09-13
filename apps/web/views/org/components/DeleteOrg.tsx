import { Card, CardContent } from '@app/ui/components/card';
import { Button } from '@app/ui/components/button';
import { useToggle } from '@app/hooks';
import { DeleteModal } from './DeleteModal';

export const DeleteOrg = () => {
    const [isOpen, triggerModal] = useToggle(false);
    return (
        <Card className="border-2 border-[#ed0000] max-w-2xl">
            <DeleteModal isOpen={isOpen} onClose={triggerModal.off} />
            <CardContent className="pt-6 ">
                <div className="space-y-2">
                    <p>
                        Deleting the org will delete its all members and all the events associated
                        with the org
                    </p>
                    <Button className="bg-[#ed0000] hover:bg-[#c60000]" onClick={triggerModal.on}>
                        Delete Org
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
