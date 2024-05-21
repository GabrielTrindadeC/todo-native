import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toZonedTime, format as formatTz } from "date-fns-tz";
export const formatDate = (date: Date) => {
  const timeZone = "America/Sao_Paulo";

  const zonedDate = toZonedTime(date, timeZone);

  const formattedDate = formatTz(zonedDate, "dd/MM/yy HH:mm", {
    timeZone,
    locale: ptBR,
  });
  return formattedDate;
};
