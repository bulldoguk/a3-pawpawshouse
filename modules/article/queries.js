const fullDateRegex = /^\d\d\d\d-\d\d-\d\d$/;

module.exports = (self, query) => {
  return {
    builders: {
      // Filter by year, in YYYY-MM-DD format. The event must
      // be taking place during that year (it might surround it).
      // Use of this filter cancels the upcoming filter
      year: {
        def: null,
        safeFor: 'public',
        finalize() {
          const year = query.get('year');
          if (!year) {
            return;
          }

          query.and({
            $and: [
              { createdAt: { $lte: new Date(year + '-12-31') } },
              { createdAt: { $gte: new Date(year + '-01-01') } }
            ]
          });
        },
        launder(value) {
          return self.apos.launder.string(value);
        },
        async choices() {
          const allDates = await query
            .clone()
            .toDistinct('createdAt');

            const years = [ {
            value: null,
            label: 'bdArticle:filterAll'
          } ];
          for (const eachDate of allDates) {
            const year = eachDate.getFullYear();
            if (!years.find(e => e.value === year)) {
              years.push({
                value: year,
                label: year
              });
            }
          }
          years.sort().reverse();
          return years;
        }
      },
      // Filter by month, in YYYY-MM- format, using regex. The event must
      // be taking place during that month (it might surround it).
      // Use of this filter cancels the upcoming filter
      month: {
        def: null,
        safeFor: 'public',
        finalize() {
          const month = query.get('month');

          if (!month) {
            return;
          }

          query.and({
            $and: [
              { createdAt: { $lte: new Date(month + '-31') } },
              { createdAt: { $gte: new Date(month + '-01') } }
            ]
          });
        },
        launder(s) {
          s = self.apos.launder.string(s);

          if (!s.match(/^\d\d\d\d-\d\d$/)) {
            return null;
          }
          return s;
        },
        async choices() {
          const allDates = await query
            .clone()
            .toDistinct('createdAt');

          const months = [ {
            value: null,
            label: 'bdArticle:filterAll'
          } ];          
          for (const eachDate of allDates) {
            const thisMonth = eachDate.getMonth()+1
            let month = thisMonth <= 9 ? '0' + thisMonth.toString() : thisMonth.toString()
            month = eachDate.getFullYear() + '-' + month
            if (!months.find(e => e.value === month)) {
              months.push({
                value: month,
                label: month
              });
            }
          }
          months.sort().reverse();
          return months;
        }
      },
      // Filter by month, in YYYY-MM-DD format, using regex. The event must
      // be taking place during that month (it might surround it).
      // Use of this filter cancels the upcoming filter
      day: {
        def: null,
        safeFor: 'public',
        finalize() {
          const day = query.get('day');

          if (day === null) {
            return;
          }

          query.and({
            $and: [
              { createdAt: { $lte: new Date(day + 'T23:59:59Z') } },
              { createdAt: { $gte: new Date(day + 'T00:00:00Z') } }
            ]
          });
        },
        launder(s) {
          s = self.apos.launder.string(s);

          if (!s.match(fullDateRegex)) {
            return null;
          }
          return s;
        },
        async choices() {
          const allDates = await query
            .clone()
            .toDistinct('createdAt');

          const days = [ {
            value: null,
            label: 'bdArticle:filterAll'
          } ];
          for (const eachDate of allDates) {
            const thisMonth = eachDate.getMonth()+1
            let month = thisMonth <= 9 ? '0' + thisMonth.toString() : thisMonth.toString()
            month = eachDate.getFullYear() + '-' + month
            let day = eachDate.getDate().toString()
            if (day.length < 2) { day = '0' + day }
            const choiceDate = month + '-' + day
            if (!days.find(e => e.value === choiceDate)) {
              days.push({
                value: choiceDate,
                label: choiceDate
              });
            }
          }
          days.sort().reverse();
          return days;
        }
      },
      date: {
        def: null,
        safeFor: 'public',
        finalize() {
          query.day(query.get('date'));
        },
        launder(s) {
          return self.apos.launder.string(s);
        }
      }
    }
  };
};
