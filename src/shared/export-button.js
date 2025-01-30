import { PiArrowLineUpBold } from 'react-icons/pi';
import { Button } from 'rizzui';
import cn from '../Utils/class-names';
import { exportToCSV } from '../Utils/export-to-csv';

export default function ExportButton({ data, header, fileName, className, exportBtnText }) {
  return (
    <Button variant="outline" onClick={() => exportToCSV(data, header, fileName)} className={cn('w-full @lg:w-auto', className)}>
      <PiArrowLineUpBold className="me-1.5 h-[17px] w-[17px]" /> { exportBtnText ? exportBtnText : 'Export'}
    </Button>
  );
}
