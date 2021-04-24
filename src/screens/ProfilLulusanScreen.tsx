import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {RootParamList} from '../../App';

type Props = StackScreenProps<RootParamList, 'ProfilLulusan'>;

export const ProfilLulusanScreen = ({navigation}: Props) => {
  const {colors} = useTheme();

  const pageData = {
    profil: [
      {
        title: 'CREATIVE LEADER',
        desc:
          'Memiliki karakter kepemimpinan yang unggul, jujur, idealis, berani, empatik, kolaboartif, selalu belajar, pemimpi, sayang diri sendiri, berkomitmen, dan tekun',
      },
      {
        title: 'DESIGN THINKER',
        desc:
          'Pendekatan mutakhir kepada proses pencarian ide dan solusi inovatif',
      },
      {
        title: 'THE LOCAL ENABLER',
        desc: 'Pemberdaya bagi komoditas dan masyarakan lokal',
      },
      {
        title: 'TECHNOPRENEUR',
        desc:
          'Technopreneurship sebagai jiwa yang melandasi setiap tindakan yntuk berkarya. Menguasai teknologi dan berkontribusi positif bagi lingkungan',
      },
      {
        title: 'PENGETAHUAN DAN KEILMUAN',
        desc:
          'Memahami proses relayasa bahan, Basis penguasaan kimia fisika dan matematika',
      },
      {
        title: 'KEMAMPUAN KERJA',
        desc:
          'Rekayasa Proses, Rekayasa Sistem, Mampu menyelesaikan masalah dengan pendekatan teknologi, manajemen dan rekayasa sistem',
      },
      {
        title: 'KEMAMPUAN MANAJEMEN',
        desc: 'Mengidentifikasi dan menyelesaikan masalah',
      },
      {
        title: 'CAKAP DAN TATA NILAI',
        desc: 'Hands, Heads, Health, Heart',
      },
      {
        desc: 'Pelaku usaha Agroindustri, Akademisi dan Peneliti',
      },
      {
        desc: 'Penggerak masyarakat bidang Agroindustri',
      },
      {
        desc:
          'Tenaga profesional, rekayasawan dan analis pada Industri Pertanian',
      },
      {
        desc:
          'Aparatur Sipil Negara (ASN) dan pengambil kebijakan Industri Pertanian di Pemerintahan baik daerah maupun pusat',
      },
    ],
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <Text
        style={{
          color: colors.text,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Profil lulusan yang diharapkan secara umum dari proses yang ditempuh
        melalui kurikulum Teknologi Industri Pertanian
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {pageData.profil.map((item, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              minWidth: '50%',
            }}>
            <Text
              style={{
                color: '#396873',
                fontSize: 14,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              {item.title}
            </Text>
            <Text style={{color: colors.text, textAlign: 'center'}}>
              {item.desc}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfilLulusanScreen;
