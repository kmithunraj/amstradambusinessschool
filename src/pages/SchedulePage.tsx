import { useState } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isToday,
  parseISO,
} from 'date-fns'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react'
import { scheduleEvents } from '../data/mockData'

const eventColors: Record<string, string> = {
  class: 'bg-blue-500',
  workshop: 'bg-purple-500',
  event: 'bg-abs-gold',
  deadline: 'bg-red-500',
}

const eventLabels: Record<string, string> = {
  class: 'Live Class',
  workshop: 'Workshop',
  event: 'Event',
  deadline: 'Deadline',
}

export default function SchedulePage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 6, 1)) // July 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 6, 10))

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const startPad = monthStart.getDay()
  const padDays = Array.from({ length: startPad }, (_, i) => i)

  const getEventsForDate = (date: Date) =>
    scheduleEvents.filter((e) => isSameDay(parseISO(e.date), date))

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : []

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">Schedule</h1>
        <p className="mt-1 text-gray-600">Your academic calendar and upcoming events</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-semibold text-abs-navy">
              <CalendarIcon className="h-5 w-5 text-abs-gold" />
              {format(currentMonth, 'MMMM yyyy')}
            </h2>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="py-2">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {padDays.map((_, i) => (
              <div key={`pad-${i}`} className="aspect-square" />
            ))}
            {days.map((day) => {
              const dayEvents = getEventsForDate(day)
              const isSelected = selectedDate && isSameDay(day, selectedDate)
              return (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`relative aspect-square rounded-lg p-1 text-sm transition-colors ${
                    !isSameMonth(day, currentMonth)
                      ? 'text-gray-300'
                      : isSelected
                        ? 'bg-abs-navy text-white'
                        : isToday(day)
                          ? 'bg-abs-gold/20 font-semibold text-abs-navy'
                          : 'text-gray-700 hover:bg-abs-cream'
                  }`}
                >
                  {format(day, 'd')}
                  {dayEvents.length > 0 && (
                    <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-0.5">
                      {dayEvents.slice(0, 3).map((e, i) => (
                        <span
                          key={i}
                          className={`h-1 w-1 rounded-full ${isSelected ? 'bg-white' : eventColors[e.type]}`}
                        />
                      ))}
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-100 pt-4">
            {Object.entries(eventLabels).map(([type, label]) => (
              <div key={type} className="flex items-center gap-2 text-xs text-gray-600">
                <span className={`h-2.5 w-2.5 rounded-full ${eventColors[type]}`} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Selected day events */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-abs-navy">
            {selectedDate
              ? format(selectedDate, 'EEEE, d MMMM yyyy')
              : 'Select a date'}
          </h2>
          <div className="mt-4 space-y-3">
            {selectedEvents.length === 0 ? (
              <p className="text-sm text-gray-400">No events scheduled for this day.</p>
            ) : (
              selectedEvents.map((event, i) => (
                <div key={i} className="rounded-lg border border-gray-100 p-4">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${eventColors[event.type]}`} />
                    <span className="text-xs font-medium text-gray-500">
                      {eventLabels[event.type]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800">{event.title}</p>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4">
            <h3 className="text-sm font-semibold text-abs-navy">All Upcoming</h3>
            <div className="mt-3 space-y-2">
              {scheduleEvents.slice(0, 6).map((event, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDate(parseISO(event.date))}
                  className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-abs-cream"
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full ${eventColors[event.type]}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-gray-800">{event.title}</p>
                    <p className="text-xs text-gray-400">
                      {format(parseISO(event.date), 'd MMM yyyy')}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
