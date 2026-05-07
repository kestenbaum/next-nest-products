import React, { FC, ReactNode } from 'react';

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    children: ReactNode;
    isLoading?: boolean;
    danger?: boolean;
}

const ConfirmModal: FC<ConfirmModalProps> = ({isOpen, onClose, onConfirm, title = "Confirm", children, isLoading = false, danger = false}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity cursor-pointer"
                onClick={!isLoading ? onClose : undefined}
            ></div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl z-10 w-full max-w-md p-6 transform transition-all scale-100 relative">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {title}
                </h3>

                <div className="text-slate-600 dark:text-slate-400 mb-6">
                    {children}
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`
                            px-4 py-2 rounded-lg text-white font-medium transition-colors flex items-center gap-2 cursor-pointer
                            ${danger
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-blue-600 hover:bg-blue-700"
                        }
                            disabled:opacity-70 disabled:cursor-not-allowed
                        `}
                    >
                        {isLoading && (
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {isLoading ? "Waiting..." : "Confirm"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;