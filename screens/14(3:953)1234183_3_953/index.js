import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_3_1018}>
        <View style={styles.View_I3_1018_1_5577}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b72/2bad/5d6a9f275d625907d3d0cda0b6e0208a"
            }}
            style={styles.ImageBackground_I3_1018_1_5568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d12/4b47/f4c1414f491a96d84cba6a5ee102a3ac"
            }}
            style={styles.ImageBackground_I3_1018_1_5571}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f1/9e9a/cb650f82c6e314db8df2896be5691a86"
            }}
            style={styles.ImageBackground_I3_1018_1_5574}
          />
        </View>
        <View style={styles.View_I3_1018_1_5578}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8437/7456/7ad1c5058c6139e8abec4a4e2ba36202"
            }}
            style={styles.ImageBackground_I3_1018_1_5569}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/918a/9e41/f8fea2f347ebd35786c8c5e0b344214e"
            }}
            style={styles.ImageBackground_I3_1018_1_5572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d6/516f/ab9c07f6c9000bfc67ef5fdf9f3bf6bd"
            }}
            style={styles.ImageBackground_I3_1018_1_5575}
          />
        </View>
        <View style={styles.View_I3_1018_1_5579}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6da7/b88e/580d488e5d34a397ec732cabf0e3b0d2"
            }}
            style={styles.ImageBackground_I3_1018_1_5570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe8d/dd4d/0822600518d2160c24870cbf32aa1476"
            }}
            style={styles.ImageBackground_I3_1018_1_5573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24b1/79b9/c6647265f6e9b47e67d2e14480e484c8"
            }}
            style={styles.ImageBackground_I3_1018_1_5576}
          />
        </View>
        <View style={styles.View_I3_1018_1_5580}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87ff/01d7/6327982c4f3d86acdbb3e3d148c25ca4"
            }}
            style={styles.ImageBackground_I3_1018_1_5565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65c6/ca12/64f6e50020768e344ba311eef7a7c2e5"
            }}
            style={styles.ImageBackground_I3_1018_1_5566}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e6a/d61e/995a82d6bb21553b81035a7cf56b238f"
            }}
            style={styles.ImageBackground_I3_1018_1_5567}
          />
        </View>
        <View style={styles.View_I3_1018_1_5581}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7400/d5b7/f5778be07df721108fdbce1f9b54a363"
            }}
            style={styles.ImageBackground_I3_1018_1_5582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8285/4676/63aaeaf569dd85c01914cf13099349d3"
            }}
            style={styles.ImageBackground_I3_1018_1_5583}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c369/8257/29791fbdff6df6b9a08acafef90e54ec"
            }}
            style={styles.ImageBackground_I3_1018_1_5584}
          />
        </View>
      </View>
      <View style={styles.View_3_954}>
        <View style={styles.View_I3_954_1_2983}>
          <View style={styles.View_I3_954_1_2984}>
            <View style={styles.View_I3_954_1_2985} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bab/5000/7d9c1b521c0f1654220d140bac3910c7"
              }}
              style={styles.ImageBackground_I3_954_1_2986}
            />
            <View style={styles.View_I3_954_1_2987} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/affa/32aa1864f326bf8cb3822b101852c482"
            }}
            style={styles.ImageBackground_I3_954_1_2988}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/971a/6abab0c931368a5de9899b90e55498bd"
            }}
            style={styles.ImageBackground_I3_954_1_2992}
          />
          <View style={styles.View_I3_954_1_2997}>
            <View style={styles.View_I3_954_1_2998}>
              <Text style={styles.Text_I3_954_1_2998}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3_954_1_2999}>
          <View style={styles.View_I3_954_1_3000}>
            <View style={styles.View_I3_954_1_3001}>
              <View style={styles.View_I3_954_1_3001_1_1404} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099e/3e24/943efea4ea0234b3fc105d5cf9983a9c"
                }}
                style={styles.ImageBackground_I3_954_1_3001_1_1405}
              />
            </View>
            <View style={styles.View_I3_954_1_3002}>
              <View style={styles.View_I3_954_1_3002_1_1389} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e3b/a3f4/1cfe2a70188bbfc959ca00b6e2c04d2d"
                }}
                style={styles.ImageBackground_I3_954_1_3002_1_1390}
              />
            </View>
            <View style={styles.View_I3_954_1_3003}>
              <View style={styles.View_I3_954_1_3003_1_1392} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c83/d795/9308eea2f984695e40d71b68efbf2c34"
                }}
                style={styles.ImageBackground_I3_954_1_3003_1_1393}
              />
            </View>
          </View>
          <View style={styles.View_I3_954_1_3004}>
            <View style={styles.View_I3_954_1_3005}>
              <Text style={styles.Text_I3_954_1_3005}>Saved media</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_955}>
        <View style={styles.View_I3_955_1_4580} />
        <View style={styles.View_I3_955_1_4720}>
          <View style={styles.View_I3_955_1_4720_1_1580} />
        </View>
        <View style={styles.View_I3_955_1_4583}>
          <View style={styles.View_I3_955_1_4748}>
            <View style={styles.View_I3_955_1_4748_1_610} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f05/c908/c679fb55d4a3576a009381cd18fdee93"
              }}
              style={styles.ImageBackground_I3_955_1_4748_1_611}
            />
          </View>
        </View>
        <View style={styles.View_I3_955_1_4581}>
          <View style={styles.View_I3_955_1_4745}>
            <View style={styles.View_I3_955_1_4745_1_597} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6e8/986c/e8ad5b2610901834c5263905bb304ade"
              }}
              style={styles.ImageBackground_I3_955_1_4745_1_598}
            />
          </View>
        </View>
        <View style={styles.View_I3_955_1_4585}>
          <View style={styles.View_I3_955_1_4742}>
            <View style={styles.View_I3_955_1_4742_1_635} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6fa/b3a6/2dca0aa50769573484f247e160c73355"
              }}
              style={styles.ImageBackground_I3_955_1_4742_1_636}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3_1018: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85.65573770491804%"),
    minHeight: hp("85.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_1018_1_5577: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_1018_1_5568: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5571: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5574: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3_1018_1_5578: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("17.896174863387984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_1018_1_5569: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5572: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5575: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3_1018_1_5579: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("34.699453551912576%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_1018_1_5570: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5573: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5576: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3_1018_1_5580: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("51.502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_1018_1_5565: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5566: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5567: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3_1018_1_5581: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("68.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_1018_1_5582: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5583: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I3_1018_1_5584: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_954: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)"
  },
  View_I3_954_1_2983: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_2984: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.3679305946892075%")
  },
  View_I3_954_1_2985: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(33, 37, 41, 1)",
    borderWidth: 1
  },
  ImageBackground_I3_954_1_2986: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.5009218643271858%")
  },
  View_I3_954_1_2987: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  },
  ImageBackground_I3_954_1_2988: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I3_954_1_2992: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I3_954_1_2997: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_2998: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666666%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3_954_1_2998: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I3_954_1_2999: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_3000: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.371584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_3001: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_3001_1_1404: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_954_1_3001_1_1405: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.5464480874316937%")
  },
  View_I3_954_1_3002: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_3002_1_1389: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_954_1_3002_1_1390: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3_954_1_3003: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_3003_1_1392: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_954_1_3003_1_1393: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316937%")
  },
  View_I3_954_1_3004: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.114754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_954_1_3005: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3_954_1_3005: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_3_955: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.44262295081968%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_I3_955_1_4720: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497265%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4720_1_1580: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  },
  View_I3_955_1_4583: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4748: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("3.2786885245901516%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4748_1_610: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_955_1_4748_1_611: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  View_I3_955_1_4581: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4745: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333339%"),
    top: hp("3.2786885245901516%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4745_1_597: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_955_1_4745_1_598: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.9143898864912856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.728619684938522%")
  },
  View_I3_955_1_4585: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4742: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.2786885245901516%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_955_1_4742_1_635: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_955_1_4742_1_636: {
    flexGrow: 1,
    width: wp("5.6888890584309895%"),
    height: hp("3.0965390752573483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4222330729166686%"),
    top: hp("0.728619684938522%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
