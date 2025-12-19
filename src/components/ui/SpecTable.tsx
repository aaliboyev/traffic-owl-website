"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { cn } from "@/lib/utils";

interface SpecItem {
  label: string;
  value: string;
}

interface SpecTableProps {
  title?: string;
  specs: SpecItem[];
  className?: string;
}

export function SpecTable({ title, specs, className }: SpecTableProps) {
  return (
    <div className={cn("", className)}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}
      <Table
        aria-label="Specifications"
        classNames={{
          wrapper: "bg-surface/50 border border-border rounded-xl",
          th: "bg-surface text-foreground-secondary text-xs uppercase tracking-wider",
          td: "text-foreground",
        }}
      >
        <TableHeader>
          <TableColumn>Specification</TableColumn>
          <TableColumn>Value</TableColumn>
        </TableHeader>
        <TableBody>
          {specs.map((spec) => (
            <TableRow key={spec.label}>
              <TableCell className="font-medium">{spec.label}</TableCell>
              <TableCell className="text-primary font-semibold">
                {spec.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
