import { FormGroup, ValidationErrors } from '@angular/forms';
import { getTimeAsNumber } from '../utils';

export function timesValidator(fg: FormGroup): ValidationErrors | null {
  const startTimeControl = fg.get('start_time');
  const endTimeControl = fg.get('end_time');
  const startTimeValue = startTimeControl?.value;
  const endTimeValue = endTimeControl?.value;
  if (startTimeValue && endTimeValue) {
    const startTime = getTimeAsNumber(startTimeValue);
    const endTime = getTimeAsNumber(endTimeValue);
    if (startTime > endTime) {
      startTimeControl.setErrors({ invalid_greater: true });
    } else if (startTime === endTime) {
      endTimeControl.setErrors({ invalid_equal: true });
    }
  }
  return null;
}