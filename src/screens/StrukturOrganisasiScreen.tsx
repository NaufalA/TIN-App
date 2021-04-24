import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, Section, StaffCard} from '../components';
import {StaffData as staff} from '../utils';

const StrukturOrganisasiScreen = () => {
  return (
    <ScrollView>
      <Header bgUrl={require('../assets/image/staf-all-tin.jpg')} />
      <Section title="Pimpinan Prodi">
        <View style={{flex: 1, flexDirection: 'row'}}>
          {staff.pimpinanProdi.map((item, index) => (
            <StaffCard
              key={`pimpinan-${index}`}
              title={item.title}
              imgUrl={item.imgUrl}
              name={item.name}
              scholarUrl={item.scholarUrl}
              sintaUrl={item.sintaUrl}
            />
          ))}
        </View>
      </Section>
      <Section title="Guru Besar">
        <View style={{flex: 1, flexDirection: 'row'}}>
          {staff.guruBesar.map((item, index) => (
            <StaffCard
              key={`guru-besar-${index}`}
              title={item.title}
              imgUrl={item.imgUrl}
              name={item.name}
              scholarUrl={item.scholarUrl}
              sintaUrl={item.sintaUrl}
            />
          ))}
        </View>
      </Section>
      <Section title="Kepala Laboratorium">
        <View style={{flex: 1, flexDirection: 'row'}}>
          {staff.kepalaLab.map((item, index) => (
            <View style={{width: '50%'}} key={`kepala-lab-${index}`}>
              <StaffCard
                title={item.title}
                imgUrl={item.imgUrl}
                name={item.name}
                scholarUrl={item.scholarUrl}
                sintaUrl={item.sintaUrl}
              />
            </View>
          ))}
        </View>
      </Section>
      <Section title="Tenaga Pendidik dan Tenaga Kependidikan">
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {staff.staff.map((item, index) => (
            <View style={{width: '50%'}} key={`staff-${index}`}>
              <StaffCard
                title={item.title}
                imgUrl={item.imgUrl}
                name={item.name}
                scholarUrl={item.scholarUrl}
                sintaUrl={item.sintaUrl}
              />
            </View>
          ))}
        </View>
      </Section>
    </ScrollView>
  );
};

export default StrukturOrganisasiScreen;
