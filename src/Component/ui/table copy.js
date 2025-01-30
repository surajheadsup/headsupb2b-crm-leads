import RcTable from 'rc-table';
import cn from '../../Utils/class-names';
import { Empty, Text } from 'rizzui';

const classes = {
  table: `[&_table]:w-full [&_table]:rounded-[14px] [&_table]:bg-white `,
  thead: `[&_thead]:text-left [&_thead]:bg-red-main [&_thead]:text-white`,
  tcell: `[&_.rc-table-cell]:px-3 [&_th.rc-table-cell]:py-2 [&_td.rc-table-cell]:py-2 [&_th.rc-table-cell]:border-x `,
  striped:
    '[&_.rc-table-row:hover]:bg-red-lighter [&_.rc-table-row:hover]:duration-100',
  variants: {
    classic:
      '[&_.rc-table-container]:overflow-x-scroll [&_thead]:bg-gray-100 [&_.rc-table-container]:border-x [&_.rc-table-container]:border-muted/70 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted/70 [&_thead]:border-y [&_thead]:border-muted/70',
    modern:
      '[&_thead_th]:bg-gray-100 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted/70 [&_thead_.rc-table-row-expand-icon-cell]:bg-gray-100',
    minimal:
      '[&_thead_th]:bg-gray-100 [&_thead_th:first-child]:rounded-ss-lg [&_thead_th:first-child]:rounded-es-lg [&_thead_th:last-child]:rounded-se-lg [&_thead_th:last-child]:rounded-ee-lg [&_thead_.rc-table-row-expand-icon-cell]:bg-gray-100',
    elegant:
      '[&_.rc-table-container]:overflow-x-scroll [&_thead]:border-y [&_thead]:border-muted/70 [&_td.rc-table-cell]:border [&_td.rc-table-cell]:border-muted/70',
    retro:
      '[&_thead]:border-y [&_thead]:border-muted/70 [&_tbody_tr:last-child_td.rc-table-cell]:border-b [&_tbody_tr:last-child_td.rc-table-cell]:border-muted/70',
  },

};

export default function Table({ striped, variant = 'elegant', emptyText, className, ...props }) {
  return (
    <RcTable className={cn(classes?.table, classes?.thead, classes?.tcell, classes.variants[variant], classes?.striped)}
      emptyText={
        emptyText || (
          <div className="py-5 text-center lg:py-8">
            <Empty /> <Text className="mt-3">No Data</Text>
          </div>
        )
      }
      
      {...props}
    />
  );
}


function handleTextAlignment(align) {
  if (align === 'center') return 'justify-center';
  if (align === 'right') return 'justify-end';
  return '';
}

export function HeaderCell({ title, align = 'left', width, ellipsis, sortable, className }) {
  if (ellipsis && width === undefined) {
    console.warn('When ellipsis is true make sure you are using the same column width in HeaderCell component too.');
  }
  if (width !== undefined && ellipsis !== true) {
    console.warn("width prop without ellipsis won't work, please set ellipsis prop true.");
  }
  return (
    <div className={cn('flex items-center gap-1 ', sortable && 'cursor-pointer', handleTextAlignment(align), className)} >
      <div {...(ellipsis && { className: 'truncate' })} {...(ellipsis && width && { style: { width } })} >
        {title}
      </div>
    </div>
  );
}
