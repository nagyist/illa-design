import {
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react"
import { TableData } from "./table-data"
import { BoxProps } from "@illa-design/theme"
import { Column, ColumnDef } from "@tanstack/react-table"

export type TableSize = "small" | "medium" | "large"

export type TableLayout = "auto" | "fixed"

export type TableAlign =
  | "left"
  | "center"
  | "right"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"

export interface TableProps<D extends TableData>
  extends HTMLAttributes<HTMLDivElement>,
    TableContextProps,
    BoxProps {
  columns?: ColumnDef<D>[]
  data?: D[]
  tableLayout?: TableLayout
  bordered?: boolean
  disableSortBy?: boolean
  disableFilters?: boolean
}

export interface TableContextProps {
  borderedCell?: boolean
  striped?: boolean
  showHeader?: boolean
  showFooter?: boolean
  size?: TableSize
  align?: TableAlign
}

export interface TBodyProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BoxProps {}

export interface TrProps
  extends HTMLAttributes<HTMLTableRowElement>,
    BoxProps {}

export interface TdProps
  extends Omit<TdHTMLAttributes<HTMLTableDataCellElement>, "align">,
    TableContextProps,
    BoxProps {}

export interface TFootProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BoxProps {}

export interface THeadProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BoxProps {}

export interface ThProps
  extends Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, "align">,
    TableContextProps,
    BoxProps {}

export interface TableFilterProps<D extends TableData> extends BoxProps {
  renderFilterContent?: (columnProps: Column<D, unknown>) => ReactNode
  columnProps: Column<D, unknown>
}
