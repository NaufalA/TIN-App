import React from 'react';
import {ScrollView, View} from 'react-native';
import Section from './Section';
import StaffCard from './StaffCard';

const StrukturOrganisasiScreen = () => {
  const staff = {
    pimpinanProdi: [
      {
        title: 'Kepala Departemen',
        imgUrl: require('../assets/image/kepala-departemen.jpg'),
        name: 'Dr. Ir. Tensiska, M.Si.',
        scholarUrl:
          'https://scholar.google.com/citations?hl=en&user=zdX_ejwAAAAJ',
        sintaUrl:
          'https://sinta.ristekbrin.go.id/authors/detail?id=6026438&view=overview',
      },
      {
        title: 'Kepala Prodi',
        imgUrl: require('../assets/image/kepala-prodi.jpg'),
        name: 'Dr. Efri Mardawati, STP., MT.',
        scholarUrl:
          'https://scholar.google.com/citations?user=HmskG5EAAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6014535&view=overview',
      },
    ],
    guruBesar: [
      {
        title: 'Guru Besar',
        imgUrl: require('../assets/image/prof-roni.png'),
        name: 'Prof. Dr. Ir. H. Roni Kastaman, MSIE.',
        scholarUrl:
          'https://scholar.google.com/citations?user=eoFajK0AAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6014535&view=overview',
      },
    ],
    kepalaLab: [
      {
        title: 'Kepala Lab. Sistem dan Manajemen Agroindustri',
        imgUrl: require('../assets/image/totok-pujianto.jpg'),
        name: 'Ir. H. Totok Pujianto, MSIE.',
        scholarUrl:
          'https://scholar.google.com/citations?user=bHl0ZksAAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail?id=5986097&view=overview',
      },
      {
        title: 'Kepala Lab Teknologi Proses Agroindustri',
        imgUrl: require('../assets/image/anas-bunyamin.jpg'),
        name: 'Anas Bunyamin, STP., M.Si.',
        scholarUrl:
          'https://scholar.google.com/citations?user=G9SJJx0AAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6026777&view=overview',
      },
    ],
    staff: [
      {
        title: 'Dosen Lab. Sistem dan Manajemen Agroindustri',
        imgUrl: require('../assets/image/irfan-ardiansah.jpg'),
        name: 'Irfan Ardiansah, STP., MT.',
        scholarUrl:
          'https://scholar.google.com/citations?user=4S8W8V0AAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6014510&view=overview',
      },
      {
        title: 'Dosen Lab. Sistem dan Manajemen Agroindustri',
        imgUrl: require('../assets/image/dwi-purnomo.jpg'),
        name: 'Dr. Dwi Purnomo, STP., MT.',
        scholarUrl:
          'https://scholar.google.com/citations?user=6tTWr_wAAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=5987177&view=overview',
      },
      {
        title: 'Dosen Lab. Sistem dan Manajemen Agroindustri',
        imgUrl: require('../assets/image/devi-Maulida-rahmah.jpg'),
        name: 'Devi Maulida Rahmah, STP., MT.',
        scholarUrl:
          'https://scholar.google.com/citations?user=rr9xCv0AAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6009501&view=overview',
      },
      {
        title: 'Dosen Lab. Teknologi Proses Agroindustri',
        imgUrl: require('../assets/image/selly-putri.jpg'),
        name: 'Selly Harnesa Putri, STP., MP.',
        scholarUrl:
          'https://scholar.google.com/citations?user=c6NAl0EAAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6130682&view=overview',
      },
      {
        title: 'Dosen Lab. Teknologi Proses Agroindustri',
        imgUrl: require('../assets/image/budi-harahap.jpg'),
        name: 'Budi Mandra Harahap, STP., MT.',
        scholarUrl:
          'https://scholar.google.com/citations?user=zIl8uZwAAAAJ&hl=en&oi=ao',
        sintaUrl:
          'https://www.sinta.ristekbrin.go.id/authors/detail/?id=6741881&view=overview',
      },
      {
        name: 'Desi Nurliasari, STP., M.T',
      },
      {
        name: 'Faisal Syahmurman, ST., MM',
      },
      {
        name: 'Dr. Anting Wulandari, STP, M.Si.',
      },
      {
        name: 'Koko Iwan Agus Kurniawan, STP., M.Sc.',
        imgUrl: require('../assets/image/koko-kurniawan.jpg'),
      },
      {
        title: 'Staf Program Studi',
        imgUrl: require('../assets/image/komarudin.jpg'),
        name: 'Komarudin, S.Sos.',
      },
      {
        title: 'Staf Program Studi',
        imgUrl: require('../assets/image/uus.jpg'),
        name: 'Uus Suhendi, SE.',
      },
      {
        title: 'Laboran',
        imgUrl: require('../assets/image/sugianto.jpg'),
        name: 'Sugianto',
      },
    ],
  };
  return (
    <ScrollView>
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
      <Section title="Kepala Laboratorium">
        <View style={{flex: 1, flexDirection: 'row'}}>
          {staff.kepalaLab.map((item, index) => (
            <View style={{width: '50%'}}>
              <StaffCard
                key={`pimpinan-${index}`}
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
            <View style={{width: '50%'}}>
              <StaffCard
                key={`pimpinan-${index}`}
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
