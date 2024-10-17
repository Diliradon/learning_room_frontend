'use client'

import { useClickOutside } from '@/lib/utils/useClickOutside';
import { cn } from '@/lib/utils/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRef, useState } from 'react';

type Props = {
  values: string[];
  label: string;
  onSelect: (item: string) => void;
  currentItem: string;
};

export const Dropdown: React.FC<Props> = ({ values, label, onSelect, currentItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside(
    menuRef,
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    buttonRef,
  );

  return (
    <div className="relative">
      <div className="flex flex-col gap-2 text-start">
        <span className="main-text-medium">{label}</span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'main-text flex justify-between rounded-t-3xl border border-gray-10 px-[12px] py-2.5',
            {
              'rounded-b-3xl': !isOpen,
            },
          )}
          ref={buttonRef}
        >
          <p>{currentItem}</p>
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute flex w-full flex-col rounded-b-3xl border border-t-0 border-gray-10 bg-gray-0"
          ref={menuRef}
        >
          {values.map(
            (item, i, arr) => (
              <div
                key={i}
                className={cn(
                  'w-full border-b border-gray-10 px-[12px] py-[10px]',
                  {
                    'rounded-b-3xl border-b-0': i === arr.length - 1,
                    'bg-gray-10': item === currentItem,
                  },
                )}
                onClick={() => onSelect(item)}
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};
