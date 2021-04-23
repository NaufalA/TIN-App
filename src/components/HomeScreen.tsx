import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RootParamList} from '../../App';
import {
  faChalkboardTeacher,
  faFlask,
  faUsers,
  faMapMarked,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {useTheme} from '@react-navigation/native';
import {Home} from '../styles';

type Props = StackScreenProps<RootParamList, 'Home'>;

const Header = (): JSX.Element => (
  <View style={Home.header}>
    <Text style={Home.headerText}>Program Studi</Text>
    <Text style={Home.headerText}>Teknologi Industri Pertanian</Text>
  </View>
);

const Section: React.FC<{title: string}> = ({children, title}) => (
  <View style={Home.section}>
    <Text style={Home.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const HomeScreen = ({navigation, route}: Props) => {
  const {colors} = useTheme();

  const pageData = {
    misi: [
      {
        icon: faChalkboardTeacher,
        title: 'ACADEMIC',
        desc: 'Menyelenggarakan pendidikan yang inovatif dan merdeka',
      },
      {
        icon: faFlask,
        title: 'RESEARCH',
        desc: 'Menyelenggarakan kegiatan penelitian yang solutif',
      },
      {
        icon: faUsers,
        title: 'NETWORKING',
        desc:
          'Membangun jejaring kerja antar stakeholder menuju keunggulan Agroindustri',
      },
      {
        icon: faMapMarked,
        title: 'ENTREPRENEUR',
        desc:
          'Memberdayakan wirausahawan, IKM dan UKM Agroindustri agar berdaya saing tinggi',
      },
    ],
    tujuan: [
      'Menghasilkan sarjana Teknologi Industri Pertanian yang memiliki karakter Design Thinker, Creative Leader, Local Enabler dan Technopreneur',
      'Menghasilkan karya penelitian ilmiah yang aplikatif dan terhilirisasi',
      'Mendukung pengembangan Agroindustri yang menghasilkan produk berkualitas',
      'Mendukung pengembangan Agroindustri yang menghasilkan produk Memfasilitasi pengembangan IKM dan UKM serta menciptakan kewirausahaan',
    ],
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <Text>{route.params?.paramA}</Text>
      <Button
        title="Profil Lulusan"
        onPress={() => navigation.navigate('Profil Lulusan', {})}></Button>
      <Section title="VISI">
        <Text style={{textAlign: 'center', fontSize: 16, color: colors.text}}>
          Pada Tahun 2025 Menjadi Program Studi Yang Unggul Dalam Bidang
          Agroindustri Untuk Kemandirian Bangsa
        </Text>
      </Section>
      <Section title="MISI">
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {pageData.misi.map((item, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                minWidth: '50%',
              }}>
              <FontAwesomeIcon
                color={colors.primary}
                size={40}
                icon={item.icon}
              />
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
      </Section>
      <Section title="TUJUAN">
        <View style={{flex: 1, flexDirection: 'column'}}>
          {pageData.tujuan.map((item, index) => (
            <Text
              key={index}
              style={{
                flex: 1,
                padding: 5,
                textAlign: 'center',
                color: colors.text,
              }}>
              {item}
            </Text>
          ))}
        </View>
      </Section>
      <Section title="SEJARAH">
        <Text style={{textAlign: 'center', fontSize: 14, color: colors.text}}>
          Pada Tahun 2025 Menjadi Program Studi Yang Unggul Dalam Bidang
          Agroindustri Untuk Kemandirian Bangsa
        </Text>
      </Section>
      <View style={{backgroundColor: '#2a333f', padding: 30}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
          CONTACT
        </Text>
        <Text style={{color: 'white'}}>
          Jalan Raya Bandung – Sumedang KM. 21, Kecamatan Jatinangor, Kabupaten
          Sumedang 45363
        </Text>
        <Text style={{color: 'white'}}>Telp. 022-7798844</Text>
        <Text style={{color: 'white'}}>Fax. 022-7795780</Text>
        <Text style={{color: 'white'}}>Email : humasftip@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
