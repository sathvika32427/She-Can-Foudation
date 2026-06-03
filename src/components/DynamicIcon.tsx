/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  // Gracefully fallback to HelpCircle if the component name is not found
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  
  return <IconComponent className={className} />;
};
