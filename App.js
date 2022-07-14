/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Image
} from 'react-native';

const arrayData = [
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  },
  {
    url_1: 'https://www.sokakbutik.com/UserFiles/Fotograflar/org/9469-kanat-baskili-beyaz-oversize-unisex-tshirt-img-0012-1-jpg-img-0012-1.jpg',
    url_2: 'https://www.sokakbutik.com/UserFiles/Fotograflar/thumbs/14107-buz-mavisi-parcali-mom-pantolon-kot-jpg-kot.jpg',
    url_3: 'https://stn-benetton.mncdn.com/mnresize/630/630/Content/media/ProductImg/original/312223s1mu101t-04b-duz-keten-tshirt-637921087476334725.jpg'
  }
]

const App = () => {

  const [count, setCount] = useState(0);//bu count degerini scrollviewin nereye scroll etmesi gerektigini belirtmek icin kullaniyoruz
  const [contentHeight, setContentHeight] = useState(0);// bu contentHeight degerini scrollviewin contentinin yuksekligini belirtmek icin kullaniyoruz


  const scrollRef = useRef()// scrollviewin animasyonu için referans degeri
  const scrollAnimation = useRef(new Animated.Value(0))// animasyon degeri
 
  useEffect(() => {
    
    // burada animasyon degeri icin bir listener var bu bize anlik animasyon degerini veriyor bu deger arttikca
    // biz scrollto yazan kisimda scrollview surekli scroll et diyoruz bu animasyon degeri de alttaki animated.timing yazan yerde artiyor
    // if else yazan kisimlarda da sona veya basa gelip gelmedigine bakarak count degerini once yukselik degerine sonra da 0 a esitliyorz
    // boylece bir yukari bir asagi kayiyor
    scrollAnimation.current.addListener((animation) => {
      
      if (animation.value == contentHeight) { 
        setCount(0);
      } else if (animation.value == 0) {
        setCount(contentHeight);
      }

      // burada referansi kullanarak scrollviewa su noktaya kaydir diyoruz
      scrollRef.current &&
        scrollRef.current.scrollTo({
          y: animation.value,
          animated: false,
        })
      
    })

    //burada animasyon degeri 0 dan count degerine dogru artiyor duration da bu degerin ne kadar surede artacagini belirtiyor

    Animated.timing(scrollAnimation.current, {
      toValue: count,
      duration: 2000,
      useNativeDriver: false,
    }).start()

    return () => {
      // clearInterval(intervalId);
      scrollAnimation.current.removeAllListeners();
    };
   
    
  }, [contentHeight, count]);

  return (
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Animated.ScrollView
        ref={scrollRef}
        onContentSizeChange={(width, height) => {
          //burada da contentinin yuksekligini statelere atiyoruz bu degere dogru kaydir diye kullanabilmek icin
          setContentHeight(height)
          setCount(height)
        }}
        onScrollBeginDrag={() => scrollAnimation.current.stopAnimation()}
      >
       
        {arrayData.map((image, index) => (<View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{
              uri: image.url_1,
            }}
          />
          <Image
            style={{
              marginTop: 30,
              width: 100,
              height: 100,
            }}
            source={{
              uri: image.url_2,
            }}
          />
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{
              uri: image.url_3,
            }}
          />
        </View>))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default App;
