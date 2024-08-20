const currentYear = new Date().getFullYear() + "";
const currentMonth = new Date().getMonth() + 1 + "";
const currentDay = new Date().getDay() + "";
const currentDate = {
  day: currentDay,
  month: currentMonth,
  year: currentYear,
};

const yearData = {
  totalVodka: 0,
  totalBill: 0,
  months: [],
};

const service = {
  isError: false,
  isLoading: false,
  message: "",
};

const INIT_ALCO_STATE = {
  currentDate,
  yearData,
  service,
};

const SALARY_INIT = {
  year: currentYear,
  month: currentMonth,
  salaryRate: 0,
  premiumRate: 0,
  premiumUzn: 0,
  taxRate: 27,
  nettoPerHours: 0,
  weekDays: 0,
  weekendDays: 0,
  standardWorkHours: 0,
  extraHours_50: 0,
  extraHours_100: 0,
  extraHours_120: 0,
  sickLeaveWeekDays: 0,
  sickLeaveWeekendDays: 0,
  holidays: 0,
  usedVacation: 0,
  bloodDonation: 0,
  standardSalary: 0,
  extraSalary: 0,
  totalSalary: 0,
};

module.exports = {
  SALARY_INIT,
  INIT_ALCO_STATE,
};