import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Section} from '../components';

const FasilitasScreen = () => {
  const {colors} = useTheme();
  return (
    <ScrollView>
      <Section title="LABORATORIUM">
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 300,
            padding: 10,
          }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            LABORATORIUM SISTEM DAN MANAJEMEN AGROINDUSTRI
          </Text>
          <Text style={{color: colors.text}}>KEPALA LABORATORIUM</Text>
          <Text style={{color: colors.text, fontSize: 16, fontWeight: 'bold'}}>
            Ir. H. Totok Pujianto, MSIE.
          </Text>
          <Image
            style={{width: '80%', height: '90%', resizeMode: 'contain'}}
            source={require('../assets/image/lab-sistem-manajemen-1.jpg')}></Image>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 700,
            padding: 10,
          }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            LABORATORIUM PROSES DAN BIOPROSES AGROINDUSTRI
          </Text>
          <Text style={{color: colors.text}}>KEPALA LABORATORIUM</Text>
          <Text style={{color: colors.text, fontSize: 16, fontWeight: 'bold'}}>
            Anas Bunyamin, STP., M.Si.
          </Text>
          <Image
            style={{width: '80%', height: '30%', resizeMode: 'contain'}}
            source={require('../assets/image/lab-teknologi-proses-1.jpg')}></Image>
          <Image
            style={{width: '80%', height: '30%', resizeMode: 'contain'}}
            source={require('../assets/image/lab-teknologi-proses-2.jpg')}></Image>
          <Image
            style={{width: '80%', height: '30%', resizeMode: 'contain'}}
            source={require('../assets/image/lab-teknologi-proses-3.jpg')}></Image>
        </View>
      </Section>
      <Section title="Angkutan Gratis dalam Kampus">
        <View style={{flex: 1}}>
          <View style={{flex: 1, marginVertical: 5}}>
            <Text
              style={{color: colors.primary, fontWeight: 'bold', fontSize: 16}}>
              Jumlah dan jenis angkutan kampus:
            </Text>
            <Text style={{color: colors.text}}>1. Angkutan Biru: 9 buah</Text>
            <Text style={{color: colors.text}}>2. Mobil gandengan: 2 buah</Text>
          </View>
          <View style={{flex: 1, marginVertical: 5}}>
            <Text
              style={{color: colors.primary, fontWeight: 'bold', fontSize: 16}}>
              Rute :
            </Text>
            <Text style={{color: colors.text}}>
              Angkutan Biru dan Gandengan : Jalur Lingkar Luar Jalur Tengah
            </Text>
          </View>
          <View style={{flex: 1, marginVertical: 5}}>
            <Text
              style={{color: colors.primary, fontWeight: 'bold', fontSize: 16}}>
              Daya tampung:
            </Text>
            <Text style={{color: colors.text}}>
              1. Angkutan Biru : 5 orang/mobil
            </Text>
            <Text style={{color: colors.text}}>
              2. Mobil gandengan : 40 orang/mobil
            </Text>
          </View>
          <View style={{flex: 1, marginVertical: 5}}>
            <Text
              style={{color: colors.primary, fontWeight: 'bold', fontSize: 16}}>
              Jam operasi :
            </Text>
            <Text style={{color: colors.text}}>07.00 – 16.00 WIB</Text>
          </View>
          <View style={{flex: 1, marginVertical: 5}}>
            <Text
              style={{color: colors.primary, fontWeight: 'bold', fontSize: 16}}>
              Istirahat :
            </Text>
            <Text style={{color: colors.text}}>– Angkutan Biru :</Text>
            <Text style={{color: colors.text}}>
              11.00 – 12.00 WIB, bergiliran 5/4 mobil biru, 1 gandengan
            </Text>
            <Text style={{color: colors.text}}>
              12.00 – 13.00 WIB, bergiliran 5/4 mobil biru, 1 gandengan
            </Text>
          </View>
          <View style={{flex: 1, marginVertical: 5}}>
            <Text style={{color: colors.primary, fontWeight: 'bold'}}>
              Peruntukkan:
            </Text>
            <Text style={{color: colors.text}}>
              Civitas Akademika, tidak disewakan
            </Text>
          </View>
        </View>
      </Section>
    </ScrollView>
  );
};

export default FasilitasScreen;
