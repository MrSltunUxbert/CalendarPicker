/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
import moment from 'moment-hijri'

export const Utils = {
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  WEEKDAYS: function() {
    const arr = Array(7).fill(0).map((_,i) => this[i] = moment.weekdaysShort(true, i))
    return arr
  },
  WEEKDAYS_MON: function() {
    const arr = Array(7).fill(0).map((_,i) => this[i] = moment.weekdaysShort(true, i+1))
    return arr
  },
  MONTHS: function(hijri) {
    const arr = Array(12).fill().map((_, i) => {
      const month = hijri ? moment(`1414/${i+1}/14`,'iYYYY/iMM/iDD').format('iMMMM') : moment(`2001/${i+1}/01`, 'YYYY/MM/DD').format('MMMM')
      return this[i] = month
    })
    return arr
  },
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year, hijri) {
    const lastDayOfMonth = moment(`${year}/${month + 1}`, hijri ? 'iYYYY/iMM' : 'YYYY/MM').endOf(hijri ? 'iMonth' : 'month');
    return hijri ?  lastDayOfMonth.iDate() : lastDayOfMonth.date();
  },
};
