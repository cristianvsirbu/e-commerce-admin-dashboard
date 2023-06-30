"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
	const storeModal = useStoreModal();
	return (
		<Modal
			title="Create a store"
			description="Add a new store to manage the categories and products"
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}
		>
			Create Store Form
		</Modal>
	);
};
