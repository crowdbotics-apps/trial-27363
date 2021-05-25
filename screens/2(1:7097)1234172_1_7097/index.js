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
      <View style={styles.View_1_7098}>
        <View style={styles.View_I1_7098_1_2407}>
          <View style={styles.View_I1_7098_1_2408}>
            <View style={styles.View_I1_7098_1_2409} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bab/5000/7d9c1b521c0f1654220d140bac3910c7"
              }}
              style={styles.ImageBackground_I1_7098_1_2410}
            />
            <View style={styles.View_I1_7098_1_2411} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/affa/32aa1864f326bf8cb3822b101852c482"
            }}
            style={styles.ImageBackground_I1_7098_1_2412}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/971a/6abab0c931368a5de9899b90e55498bd"
            }}
            style={styles.ImageBackground_I1_7098_1_2416}
          />
          <View style={styles.View_I1_7098_1_2421}>
            <View style={styles.View_I1_7098_1_2422}>
              <Text style={styles.Text_I1_7098_1_2422}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1_7098_1_2423}>
          <View style={styles.View_I1_7098_1_2424}>
            <View style={styles.View_I1_7098_1_2425}>
              <View style={styles.View_I1_7098_1_2425_1_1404} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099e/3e24/943efea4ea0234b3fc105d5cf9983a9c"
                }}
                style={styles.ImageBackground_I1_7098_1_2425_1_1405}
              />
            </View>
            <View style={styles.View_I1_7098_1_2426}>
              <View style={styles.View_I1_7098_1_2426_1_1376} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af84/54da/f1adc1bc636df6cbf2e47bfc4087d8bf"
                }}
                style={styles.ImageBackground_I1_7098_1_2426_1_1377}
              />
            </View>
          </View>
          <View style={styles.View_I1_7098_1_2427}>
            <View style={styles.View_I1_7098_1_2428}>
              <Text style={styles.Text_I1_7098_1_2428}>Enter code</Text>
            </View>
            <View style={styles.View_I1_7098_1_2429}>
              <Text style={styles.Text_I1_7098_1_2429}>
                We sent it to +7 962 047-09-02
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_7169}>
        <View style={styles.View_I1_7169_1_7080}>
          <View style={styles.View_I1_7169_1_7081}>
            <Text style={styles.Text_I1_7169_1_7081}>3</Text>
          </View>
        </View>
        <View style={styles.View_I1_7169_1_7082}>
          <View style={styles.View_I1_7169_1_7083}>
            <Text style={styles.Text_I1_7169_1_7083}>4</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55b/0650/a48e52de689c0a806ee44eab339d8b0b"
          }}
          style={styles.ImageBackground_I1_7169_1_7084}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55b/0650/a48e52de689c0a806ee44eab339d8b0b"
          }}
          style={styles.ImageBackground_I1_7169_1_7086}
        />
      </View>
      <View style={styles.View_2_879}>
        <View style={styles.View_I2_879_2_722} />
        <View style={styles.View_I2_879_2_724}>
          <View style={styles.View_I2_879_2_725}>
            <Text style={styles.Text_I2_879_2_725}>0</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_728}>
          <View style={styles.View_I2_879_2_729}>
            <Text style={styles.Text_I2_879_2_729}>9</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_818}>
          <View style={styles.View_I2_879_2_826}>
            <View style={styles.View_I2_879_2_826_2_862} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/997b/c0e3/d3977d24b20ff7adfaf0103a637feed5"
              }}
              style={styles.ImageBackground_I2_879_2_826_2_864}
            />
          </View>
        </View>
        <View style={styles.View_I2_879_2_726}>
          <View style={styles.View_I2_879_2_727}>
            <Text style={styles.Text_I2_879_2_727}>8</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_730}>
          <View style={styles.View_I2_879_2_731}>
            <Text style={styles.Text_I2_879_2_731}>7</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_732}>
          <View style={styles.View_I2_879_2_733}>
            <Text style={styles.Text_I2_879_2_733}>6</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_734}>
          <View style={styles.View_I2_879_2_735}>
            <Text style={styles.Text_I2_879_2_735}>5</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_736}>
          <View style={styles.View_I2_879_2_737}>
            <Text style={styles.Text_I2_879_2_737}>4</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_738}>
          <View style={styles.View_I2_879_2_739}>
            <Text style={styles.Text_I2_879_2_739}>3</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_740}>
          <View style={styles.View_I2_879_2_741}>
            <Text style={styles.Text_I2_879_2_741}>2</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_742}>
          <View style={styles.View_I2_879_2_743}>
            <Text style={styles.Text_I2_879_2_743}>1</Text>
          </View>
        </View>
        <View style={styles.View_I2_879_2_744}>
          <View style={styles.View_I2_879_2_744_1_1580} />
        </View>
      </View>
      <View style={styles.View_2_914}>
        <View style={styles.View_I2_914_2_911}>
          <Text style={styles.Text_I2_914_2_911}>New code 1:24</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1_7098: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)"
  },
  View_I1_7098_1_2407: {
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
  View_I1_7098_1_2408: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.367943101893357%")
  },
  View_I1_7098_1_2409: {
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
  ImageBackground_I1_7098_1_2410: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.5009093571230361%")
  },
  View_I1_7098_1_2411: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  },
  ImageBackground_I1_7098_1_2412: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I1_7098_1_2416: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I1_7098_1_2421: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_7098_1_2422: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666666%"),
    top: hp("0.9562841530054645%")
  },
  Text_I1_7098_1_2422: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I1_7098_1_2423: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_7098_1_2424: {
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
  View_I1_7098_1_2425: {
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
  View_I1_7098_1_2425_1_1404: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_7098_1_2425_1_1405: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.5464480874316937%")
  },
  View_I1_7098_1_2426: {
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
  View_I1_7098_1_2426_1_1376: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_7098_1_2426_1_1377: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830642783576675%")
  },
  View_I1_7098_1_2427: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.114754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_7098_1_2428: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_7098_1_2428: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I1_7098_1_2429: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896178%")
  },
  Text_I1_7098_1_2429: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_7169: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_7169_1_7080: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_7169_1_7081: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("0.5464480874316919%")
  },
  Text_I1_7169_1_7081: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I1_7169_1_7082: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_7169_1_7083: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999979%"),
    top: hp("0.5464480874316919%")
  },
  Text_I1_7169_1_7083: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  ImageBackground_I1_7169_1_7084: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("2.185792349726775%")
  },
  ImageBackground_I1_7169_1_7086: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("2.185792349726775%")
  },
  View_2_879: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_722: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I2_879_2_724: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("26.775956284152997%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_725: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666673%"),
    top: hp("0.2732240437158566%")
  },
  Text_I2_879_2_725: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_728: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_729: {
    width: wp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0.2732240437158424%")
  },
  Text_I2_879_2_729: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_818: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("26.775956284152997%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_826: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_826_2_862: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_879_2_826_2_864: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316848%")
  },
  View_I2_879_2_726: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_727: {
    width: wp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0.2732240437158424%")
  },
  Text_I2_879_2_727: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_730: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_731: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("0.2732240437158424%")
  },
  Text_I2_879_2_731: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_732: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_733: {
    width: wp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0.2732240437158566%")
  },
  Text_I2_879_2_733: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_734: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_735: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666673%"),
    top: hp("0.2732240437158566%")
  },
  Text_I2_879_2_735: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_736: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_737: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("0.2732240437158566%")
  },
  Text_I2_879_2_737: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_739: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.26666666666668%"),
    top: hp("0.2732240437158424%")
  },
  Text_I2_879_2_739: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_740: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_741: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666673%"),
    top: hp("0.2732240437158424%")
  },
  Text_I2_879_2_741: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_742: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_879_2_743: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.2732240437158424%")
  },
  Text_I2_879_2_743: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 23,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_879_2_744: {
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
  View_I2_879_2_744_1_1580: {
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
  View_2_914: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("57.92349726775956%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_914_2_911: {
    flexGrow: 1,
    width: wp("74.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%")
  },
  Text_I2_914_2_911: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
