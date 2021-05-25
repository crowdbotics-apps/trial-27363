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
      <View style={styles.View_7_565}>
        <View style={styles.View_7_412}>
          <View style={styles.View_I7_412_7_399}>
            <View style={styles.View_I7_412_7_402}>
              <View style={styles.View_I7_412_7_403}>
                <Text style={styles.Text_I7_412_7_403}>Hi, guys</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_7_390}>
          <View style={styles.View_I7_390_7_353}>
            <View style={styles.View_I7_390_7_351}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9667/8bdf/6803593193a97b4aef4009c3ae9162b5"
                }}
                style={styles.ImageBackground_I7_390_7_352}
              />
            </View>
            <View style={styles.View_I7_390_7_349}>
              <View style={styles.View_I7_390_7_350}>
                <Text style={styles.Text_I7_390_7_350}>
                  hot stuff here 🔥 ui8.net
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I7_390_7_356}>
            <View style={styles.View_I7_390_7_357}>
              <Text style={styles.Text_I7_390_7_357}>12:30</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_10_7}>
          <View style={styles.View_I10_7_7_353}>
            <View style={styles.View_I10_7_7_351}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/add2/996c/8be38aedcbe11a6f3d53a508c8326f77"
                }}
                style={styles.ImageBackground_I10_7_7_352}
              />
            </View>
            <View style={styles.View_I10_7_7_349}>
              <View style={styles.View_I10_7_7_350}>
                <Text style={styles.Text_I10_7_7_350}>😱😱😱</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10_7_7_356}>
            <View style={styles.View_I10_7_7_357}>
              <Text style={styles.Text_I10_7_7_357}>12:30</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_7_436}>
          <View style={styles.View_I7_436_7_429}>
            <View style={styles.View_I7_436_7_430}>
              <Text style={styles.Text_I7_436_7_430}>just a sec</Text>
            </View>
          </View>
          <View style={styles.View_I7_436_7_431}>
            <View style={styles.View_I7_436_7_432}>
              <Text style={styles.Text_I7_436_7_432}>12:30</Text>
            </View>
            <View style={styles.View_I7_436_7_1861}>
              <View style={styles.View_I7_436_7_1861_1_1528} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aaa/0a15/ce4790056dc77dbdf4017a50df0bc574"
                }}
                style={styles.ImageBackground_I7_436_7_1861_1_1529}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5728}>
        <View style={styles.View_I1_5728_1_3686}>
          <View style={styles.View_I1_5728_1_3687}>
            <View style={styles.View_I1_5728_1_3688} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bab/5000/7d9c1b521c0f1654220d140bac3910c7"
              }}
              style={styles.ImageBackground_I1_5728_1_3689}
            />
            <View style={styles.View_I1_5728_1_3690} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/affa/32aa1864f326bf8cb3822b101852c482"
            }}
            style={styles.ImageBackground_I1_5728_1_3691}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/971a/6abab0c931368a5de9899b90e55498bd"
            }}
            style={styles.ImageBackground_I1_5728_1_3695}
          />
          <View style={styles.View_I1_5728_1_3700}>
            <View style={styles.View_I1_5728_1_3701}>
              <Text style={styles.Text_I1_5728_1_3701}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1_5728_1_3702}>
          <View style={styles.View_I1_5728_1_3703}>
            <View style={styles.View_I1_5728_1_3704}>
              <View style={styles.View_I1_5728_1_3704_1_1404} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099e/3e24/943efea4ea0234b3fc105d5cf9983a9c"
                }}
                style={styles.ImageBackground_I1_5728_1_3704_1_1405}
              />
            </View>
            <View style={styles.View_I1_5728_1_3705}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/1024/005464680c7e22a7918bb4be33e4f8c6"
                }}
                style={styles.ImageBackground_I1_5728_1_3706}
              />
              <View style={styles.View_I1_5728_1_3707}>
                <View style={styles.View_I1_5728_1_3708}>
                  <Text style={styles.Text_I1_5728_1_3708}>Designers</Text>
                </View>
                <View style={styles.View_I1_5728_1_3709}>
                  <Text style={styles.Text_I1_5728_1_3709}>5 members</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1_5728_1_3710}>
              <View style={styles.View_I1_5728_1_3710_1_1376} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af84/54da/f1adc1bc636df6cbf2e47bfc4087d8bf"
                }}
                style={styles.ImageBackground_I1_5728_1_3710_1_1377}
              />
            </View>
            <View style={styles.View_I1_5728_1_3711}>
              <View style={styles.View_I1_5728_1_3711_1_1392} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c83/d795/9308eea2f984695e40d71b68efbf2c34"
                }}
                style={styles.ImageBackground_I1_5728_1_3711_1_1393}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_6363}>
        <View style={styles.View_I1_6363_1_6282}>
          <View style={styles.View_I1_6363_1_6283}>
            <View style={styles.View_I1_6363_1_6284}>
              <Text style={styles.Text_I1_6363_1_6284}>Niceee|</Text>
            </View>
            <View style={styles.View_I1_6363_1_6348}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e467/cfc9/2eb157a6dccbc1f042cde82523f4d598"
                }}
                style={styles.ImageBackground_I1_6363_1_6349}
              />
              <View style={styles.View_I1_6363_1_6350}>
                <View style={styles.View_I1_6363_1_6350_1_1510} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d5/82fb/233ebfd006bbbb45616f29918c9beb60"
                  }}
                  style={styles.ImageBackground_I1_6363_1_6350_1_1511}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1_6363_1_6345}>
            <View style={styles.View_I1_6363_1_6345_1_1380} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca18/24eb/d1618c9702be337ef2aa9731825cbc8c"
              }}
              style={styles.ImageBackground_I1_6363_1_6345_1_1381}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_923}>
        <View style={styles.View_I2_923_2_749}>
          <View style={styles.View_I2_923_2_750}>
            <Text style={styles.Text_I2_923_2_750}>return</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_751}>
          <View style={styles.View_I2_923_2_752}>
            <Text style={styles.Text_I2_923_2_752}>space</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_753}>
          <View style={styles.View_I2_923_2_754}>
            <Text style={styles.Text_I2_923_2_754}>123</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_755}>
          <View style={styles.View_I2_923_10_63}>
            <View style={styles.View_I2_923_10_63_2_862} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/997b/c0e3/d3977d24b20ff7adfaf0103a637feed5"
              }}
              style={styles.ImageBackground_I2_923_10_63_2_864}
            />
          </View>
        </View>
        <View style={styles.View_I2_923_2_757}>
          <View style={styles.View_I2_923_10_146}>
            <View style={styles.View_I2_923_10_146_10_124} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b429/55a7/8978d55e2a76027d7b981077ce03b902"
              }}
              style={styles.ImageBackground_I2_923_10_146_10_125}
            />
          </View>
        </View>
        <View style={styles.View_I2_923_2_759}>
          <View style={styles.View_I2_923_2_760}>
            <Text style={styles.Text_I2_923_2_760}>M</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_761}>
          <View style={styles.View_I2_923_2_762}>
            <Text style={styles.Text_I2_923_2_762}>N</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_763}>
          <View style={styles.View_I2_923_2_764}>
            <Text style={styles.Text_I2_923_2_764}>B</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_765}>
          <View style={styles.View_I2_923_2_766}>
            <Text style={styles.Text_I2_923_2_766}>V</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_767}>
          <View style={styles.View_I2_923_2_768}>
            <Text style={styles.Text_I2_923_2_768}>C</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_769}>
          <View style={styles.View_I2_923_2_770}>
            <Text style={styles.Text_I2_923_2_770}>X</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_771}>
          <View style={styles.View_I2_923_2_772}>
            <View style={styles.View_I2_923_2_773}>
              <Text style={styles.Text_I2_923_2_773}>Z</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_923_2_774}>
          <View style={styles.View_I2_923_2_775}>
            <Text style={styles.Text_I2_923_2_775}>L</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_776}>
          <View style={styles.View_I2_923_2_777}>
            <Text style={styles.Text_I2_923_2_777}>K</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_778}>
          <View style={styles.View_I2_923_2_779}>
            <Text style={styles.Text_I2_923_2_779}>J</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_780}>
          <View style={styles.View_I2_923_2_781}>
            <Text style={styles.Text_I2_923_2_781}>H</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_782}>
          <View style={styles.View_I2_923_2_783}>
            <Text style={styles.Text_I2_923_2_783}>G</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_784}>
          <View style={styles.View_I2_923_2_785}>
            <Text style={styles.Text_I2_923_2_785}>F</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_786}>
          <View style={styles.View_I2_923_2_787}>
            <Text style={styles.Text_I2_923_2_787}>D</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_788}>
          <View style={styles.View_I2_923_2_789}>
            <Text style={styles.Text_I2_923_2_789}>S</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_790}>
          <View style={styles.View_I2_923_2_791}>
            <Text style={styles.Text_I2_923_2_791}>A</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_792}>
          <View style={styles.View_I2_923_2_793}>
            <Text style={styles.Text_I2_923_2_793}>P</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_794}>
          <View style={styles.View_I2_923_2_795}>
            <Text style={styles.Text_I2_923_2_795}>O</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_796}>
          <View style={styles.View_I2_923_2_797}>
            <Text style={styles.Text_I2_923_2_797}>I</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_798}>
          <View style={styles.View_I2_923_2_799}>
            <Text style={styles.Text_I2_923_2_799}>U</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_800}>
          <View style={styles.View_I2_923_2_801}>
            <Text style={styles.Text_I2_923_2_801}>Y</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_802}>
          <View style={styles.View_I2_923_2_803}>
            <View style={styles.View_I2_923_2_804}>
              <Text style={styles.Text_I2_923_2_804}>T</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_923_2_805}>
          <View style={styles.View_I2_923_2_806}>
            <Text style={styles.Text_I2_923_2_806}>R</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_807}>
          <View style={styles.View_I2_923_2_808}>
            <Text style={styles.Text_I2_923_2_808}>E</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_809}>
          <View style={styles.View_I2_923_2_810}>
            <Text style={styles.Text_I2_923_2_810}>W</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_811}>
          <View style={styles.View_I2_923_2_812}>
            <Text style={styles.Text_I2_923_2_812}>Q</Text>
          </View>
        </View>
        <View style={styles.View_I2_923_2_920}>
          <View style={styles.View_I2_923_2_920_1_1580} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_7_565: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.830601092896174%"),
    minHeight: hp("56.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_412: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_412_7_399: {
    flexGrow: 1,
    width: wp("22.933333333333334%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_412_7_402: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I7_412_7_403: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950793%")
  },
  Text_I7_412_7_403: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_390: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_390_7_353: {
    flexGrow: 1,
    width: wp("45.6%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_390_7_351: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I7_390_7_352: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I7_390_7_349: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I7_390_7_350: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%")
  },
  Text_I7_390_7_350: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_390_7_356: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("9.016393442622952%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_390_7_357: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0.5464480874316919%")
  },
  Text_I7_390_7_357: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.92896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_7_7_353: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_7_7_351: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10_7_7_352: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I10_7_7_349: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I10_7_7_350: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950758%")
  },
  Text_I10_7_7_350: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_7_7_356: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.191256830601091%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_7_7_357: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0.546448087431699%")
  },
  Text_I10_7_7_357: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_436: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_436_7_429: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_I7_436_7_430: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("1.639344262295083%")
  },
  Text_I7_436_7_430: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_436_7_431: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("6.147540983606554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_436_7_432: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("0.5464480874316919%")
  },
  Text_I7_436_7_432: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_436_7_1861: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999989%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_436_7_1861_1_1528: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_436_7_1861_1_1529: {
    flexGrow: 1,
    width: wp("2.933343760172526%"),
    height: hp("1.0929068581002657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333997%"),
    top: hp("0.2732240437158495%")
  },
  View_1_5728: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)"
  },
  View_I1_5728_1_3686: {
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
  View_I1_5728_1_3687: {
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
  View_I1_5728_1_3688: {
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
  ImageBackground_I1_5728_1_3689: {
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
  View_I1_5728_1_3690: {
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
  ImageBackground_I1_5728_1_3691: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I1_5728_1_3695: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I1_5728_1_3700: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5728_1_3701: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666666%"),
    top: hp("0.9562841530054645%")
  },
  Text_I1_5728_1_3701: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I1_5728_1_3702: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5728_1_3703: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.868852459016394%")
  },
  View_I1_5728_1_3704: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5728_1_3704_1_1404: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5728_1_3704_1_1405: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.5464480874316937%")
  },
  View_I1_5728_1_3705: {
    width: wp("65.60000000000001%"),
    minWidth: wp("65.60000000000001%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1_5728_1_3706: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792298%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_5728_1_3707: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5728_1_3708: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5728_1_3708: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5728_1_3709: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.55191256830601%")
  },
  Text_I1_5728_1_3709: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5728_1_3710: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5728_1_3710_1_1376: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5728_1_3710_1_1377: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896167%")
  },
  View_I1_5728_1_3711: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5728_1_3711_1_1392: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5728_1_3711_1_1393: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316937%")
  },
  View_1_6363: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.830601092896174%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)"
  },
  View_I1_6363_1_6282: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  View_I1_6363_1_6283: {
    width: wp("80.80000000000001%"),
    minWidth: wp("80.80000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I1_6363_1_6284: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666664%"),
    top: hp("2.185792349726782%")
  },
  Text_I1_6363_1_6284: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_6363_1_6348: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%"),
    top: hp("2.185792349726782%")
  },
  ImageBackground_I1_6363_1_6349: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_6363_1_6350: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_6363_1_6350_1_1510: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_6363_1_6350_1_1511: {
    flexGrow: 1,
    width: wp("2.8444445292154947%"),
    height: hp("1.8214935813445212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166714%"),
    top: hp("0.1821382449624238%")
  },
  View_I1_6363_1_6345: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_6363_1_6345_1_1380: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_6363_1_6345_1_1381: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("0.4098360655737636%")
  },
  View_2_923: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(248, 249, 250, 1)",
    overflow: "hidden"
  },
  View_I2_923_2_749: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("24.316939890710387%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_750: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2_923_2_750: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2_923_2_751: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("24.316939890710387%"),
    backgroundColor: "rgba(233, 236, 239, 1)",
    overflow: "hidden"
  },
  View_I2_923_2_752: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2_923_2_752: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2_923_2_753: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("24.316939890710387%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_754: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2_923_2_754: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2_923_2_755: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_10_63: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_923_10_63_2_862: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_923_10_63_2_864: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  View_I2_923_2_757: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_10_146: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_923_10_146_10_124: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_923_10_146_10_125: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.546448087431699%")
  },
  View_I2_923_2_759: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_760: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_760: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_761: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_762: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_762: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_763: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_764: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_764: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_765: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_766: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_766: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_767: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_768: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_768: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_769: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_770: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_770: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_771: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_772: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333353%"),
    top: hp("0.8196721311475414%")
  },
  View_I2_923_2_773: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I2_923_2_773: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_774: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_775: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_775: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_776: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_777: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_777: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_778: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_779: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_779: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_780: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_781: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_781: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_782: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_783: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_783: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_784: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_785: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_785: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_786: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_787: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_787: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_788: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_789: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_789: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_790: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_791: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_791: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_792: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.66666666666666%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_793: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000114%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_793: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_794: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_795: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_795: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_796: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.66666666666667%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_797: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_797: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_798: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_799: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_799: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_800: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_801: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_801: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_802: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_803: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.8196721311475414%")
  },
  View_I2_923_2_804: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I2_923_2_804: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_805: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_806: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_806: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_807: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_808: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_808: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_809: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_810: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999979%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_810: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_811: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_923_2_812: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2_923_2_812: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2_923_2_920: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.61202185792351%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_923_2_920_1_1580: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
