import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RootParamList} from '../../App';
import {
  faChalkboardTeacher,
  faFlask,
  faUsers,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';
import {useTheme} from '@react-navigation/native';
import {Section, Header} from '../components';

type Props = StackScreenProps<RootParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
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
      <Header
        bgUrl={require('../assets/image/aerial-blur-bright-buildings.jpg')}
        title="PROGRAM STUDI"
        subtitle="TEKNIK INDUSTRI PERTANIAN"
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: colors.primary,
          textAlign: 'center',
          padding: 10,
        }}>
        TERAKREDITASI B
      </Text>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        <View style={{flex: 1, margin: 2}}>
          <Button
            color={colors.primary}
            title="Kurikulum"
            onPress={() => navigation.navigate('Kurikulum', {})}
          />
        </View>
        <View style={{flex: 1, margin: 2}}>
          <Button
            color={colors.primary}
            title="Fasilitas"
            onPress={() => navigation.navigate('Fasilitas', {})}
          />
        </View>
        <View style={{flex: 1, margin: 2}}>
          <Button
            color={colors.primary}
            title="Pejabat dan Staff Prodi"
            onPress={() => navigation.navigate('StrukturOrganisasi', {})}
          />
        </View>
        <View style={{flex: 1, margin: 2}}>
          <Button
            color={colors.primary}
            title="Profil Lulusan"
            onPress={() => navigation.navigate('ProfilLulusan', {})}
          />
        </View>
      </View>
      <Section title="TENTANG PRODI">
        <Text style={{color: colors.text, padding: 10}}>
          Pendirian Program Studi Teknologi Industri Pertanian Fakultas
          Teknologi Industri Pertanian (FTIP) Unpad diarahkan untuk memberikan
          solusi atas berbagai tantangan dalam pengembangan sistem pendidikan
          tinggi agroindustri, serta memfasilitasi pengembangan agroindustri,
          menitikberatkan pada pemberian nilai tambah bagi hasil pertanian,
          menghasilkan produk agroindustri bermutu tinggi, dan pelayanan yang
          terbaik kepada seluruh stakeholder. Sistem pendidikannya diarahkan
          dalam bentuk proses pembelajaran dan penelitian yang terintegrasi
          dalam kurikulum berbasis technopreneurship.
        </Text>
        <Text style={{color: colors.text, padding: 10}}>
          Lebih lanjut Program Studi Teknologi Industri Pertanian FTIP Unpad
          mengarahkan penelitiannya untuk menghasilkan produk-produk penelitian
          dan pengembangan yang dapat berkontribusi dalam pembangunan
          agroindustri dan IPTEK, serta secara aktif mengaplikasikan produk
          penelitian dan temuan inovatif dalam aspek teknologi proses dan teknik
          sistem agroindustri yang berwawasan lingkungan. Fokus kajian ilmiah
          dikembangkan pada dua bidang yaitu Bidang Teknik dan Manajemen
          Industri Pertanian termasuk lingkungannya, serta Bidang Teknik Proses
          / Bioproses pada Industri Pertanian.
        </Text>
        <Text style={{color: colors.text, padding: 10}}>
          Kurikulum berbasis technopreneurhip dirancang sangat menarik dengan
          pendekatan entrepreneurial yang dikolaborasikan dengan penguasaan
          teknologi untuk menghasilkan lulusan yang memiliki kompetensi dengan
          daya saing yang tinggi baik dalam hal keahlian dan keterampilan,
          tanggung jawab, serta motivasi untuk mengembangkan agroindustri,
          termasuk dari segi manajemen. Lulusan program studi ini berhak
          menyandang gelar Sarjana Teknik Pertanian (STP.).
        </Text>
      </Section>
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
          Program Studi Teknologi Industri Pertanian (Prodi TIN) merupakan Prodi
          baru yang didirikan pada tahun 2013 dan menerima mahasiswa baru pada
          tahun 2014. Prodi TIN UNPAD telah membulatkan tekad untuk berkomitmen
          dalam mengembangkan kurikulum yang berbasis pada technopreneurship
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
