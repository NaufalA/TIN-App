import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, SectionList} from 'react-native';
import {KurikulumData as kurikulum} from '../utils';

const KurikulumScreen = () => {
  const {colors} = useTheme();

  return (
    <SectionList
      style={{flex: 1}}
      sections={kurikulum}
      keyExtractor={(item, index) => `${item.subject}-${index}`}
      renderSectionHeader={({section: {title, pilihan}}) => (
        <View>
          <Text
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              backgroundColor: colors.primary,
              color: 'white',
              fontSize: 16,
            }}>
            {title}
          </Text>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: colors.primary,
                flex: 3,
                marginRight: 5,
              }}>
              Mata Kuliah
            </Text>
            <Text
              style={{
                flex: 1,
                color: colors.primary,
              }}>
              Wajib/Pilihan
            </Text>
            <Text style={{flex: 1, color: colors.primary}}>SKS</Text>
            {pilihan === true && (
              <Text style={{flex: 2, color: colors.primary}}>
                Bidang Kajian
              </Text>
            )}
          </View>
        </View>
      )}
      renderItem={({item}) => (
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text style={{flex: 3, marginRight: 5}}>{item.subject}</Text>
          <Text style={{flex: 1}}>{item.status}</Text>
          <Text style={{flex: 1}}>{item.sks}</Text>
          {item.bidang && <Text style={{flex: 2}}>{item.bidang}</Text>}
        </View>
      )}
    />
  );
};

export default KurikulumScreen;
