"use client";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function Home() {
	const onOpen = useStoreModal((state) => state.isOpen)
	const isOpen = useStoreModal((state) => state.isOpen)
	
	return (
		<div className="p-4">
			Root Page
		</div>
	);
}
