import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown'
import { COLORS } from '../../../constants/app-colors';
import { View } from 'react-native';
import AppButton from '../../../components/app-button';
import { AppText } from '../../../components/app-text';
import useDimension from '../../../helpers/app-dimension';
import helpers from '../../../helpers';
const { wp } = useDimension()

interface CalendarUIProps {
   onSubmit: (value?: string) => void;
   onClose: () => void;
   startDate: string;
   numberOfYearsToRun: number,
   maxDate?: string;
   minDate?: string
}

type genYearParam = {
   numberOfYearsToRun: number,
   startYear: number
}

const generateYears = ({ numberOfYearsToRun, startYear }: genYearParam): number[] => {
   let yGen = []
   if (numberOfYearsToRun > 0) {
      for (let i = 0; i < numberOfYearsToRun; i++) {
         yGen.push(startYear++)
      }
   } else {
      for (let i = 0; i > numberOfYearsToRun; i--) {
         yGen.push(startYear--)
      }
   }
   return yGen
}

const DropDownItem = (props: { setYear: any, startYear: number, numberOfYearsToRun: number }) => (
   <SelectDropdown
      data={generateYears({ numberOfYearsToRun: props.numberOfYearsToRun || 50, startYear: props?.startYear })}
      onSelect={(selectedItem, index) => {
         props?.setYear(selectedItem + '-01-06')
         // console.log(selectedItem, index)
      }}
      buttonStyle={{ width: '100%' }}
      defaultButtonText={'Select Year'}
      buttonTextAfterSelection={(selectedItem, index) => 'Select Year'}
      rowTextForSelection={(item, index) => {
         return item
      }}
   />
)

const CalendarUI = (props: CalendarUIProps) => {
   let newDate = props.startDate ? new Date(props.startDate) : new Date()
   // newDate.setFullYear(newDate.getFullYear())
   const [selected, setSelected] = useState('');
   const [myYear, setMyYear] = React.useState(newDate.toISOString()?.substring(0, 10))

   return (
      <View style={{ borderRadius: 5, backgroundColor: COLORS.WHITE, paddingBottom: 20, marginBottom: 20 }}>
         <DropDownItem numberOfYearsToRun={props.numberOfYearsToRun} setYear={setMyYear} startYear={newDate.getFullYear()} />
         <Calendar
            onDayPress={day => setSelected(day.dateString)}
            initialDate={myYear}
            minDate={props.minDate}
            maxDate={props.maxDate}
            markedDates={{
               [selected]: {
                  selected: true, disableTouchEvent: true,
                  selectedColor: COLORS.PRIMARY,

               }
            }}
            theme={{ arrowColor: COLORS.PRIMARY }}
         />
         <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <AppButton onPress={() => props.onClose()} backgroundColor={COLORS.GRAY2} style={{ width: wp(25), height: wp(10) }}>
               <AppText color={COLORS.BLACK1}>Close</AppText>
            </AppButton>
            <AppButton onPress={() => {
               //if there's no date select
               if (!selected) return helpers.showToast("Select a date")
               props.onSubmit(selected)
            }} style={{ width: wp(25), height: wp(10) }}>
               <AppText color={COLORS.WHITE} fontWeight='700'>Okay</AppText>
            </AppButton>
         </View>
      </View>
   );
};

export default CalendarUI;