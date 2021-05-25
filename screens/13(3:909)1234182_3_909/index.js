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
      <View style={styles.View_3_910}>
        <View style={styles.View_I3_910_1_2725}>
          <View style={styles.View_I3_910_1_2726}>
            <View style={styles.View_I3_910_1_2727} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bab/5000/7d9c1b521c0f1654220d140bac3910c7"
              }}
              style={styles.ImageBackground_I3_910_1_2728}
            />
            <View style={styles.View_I3_910_1_2729} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/affa/32aa1864f326bf8cb3822b101852c482"
            }}
            style={styles.ImageBackground_I3_910_1_2730}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/971a/6abab0c931368a5de9899b90e55498bd"
            }}
            style={styles.ImageBackground_I3_910_1_2734}
          />
          <View style={styles.View_I3_910_1_2739}>
            <View style={styles.View_I3_910_1_2740}>
              <Text style={styles.Text_I3_910_1_2740}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3_910_1_2741}>
          <View style={styles.View_I3_910_1_2742}>
            <View style={styles.View_I3_910_1_2743}>
              <View style={styles.View_I3_910_1_2743_1_1404} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099e/3e24/943efea4ea0234b3fc105d5cf9983a9c"
                }}
                style={styles.ImageBackground_I3_910_1_2743_1_1405}
              />
            </View>
            <View style={styles.View_I3_910_1_2744}>
              <View style={styles.View_I3_910_1_2744_1_1416} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0e/4648/a4bc93982ef35a9019232691105725fc"
                }}
                style={styles.ImageBackground_I3_910_1_2744_1_1417}
              />
            </View>
          </View>
          <View style={styles.View_I3_910_1_2745}>
            <View style={styles.View_I3_910_1_2746}>
              <Text style={styles.Text_I3_910_1_2746}>Privacy</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_911}>
        <View style={styles.View_I3_911_1_4580} />
        <View style={styles.View_I3_911_1_4720}>
          <View style={styles.View_I3_911_1_4720_1_1580} />
        </View>
        <View style={styles.View_I3_911_1_4583}>
          <View style={styles.View_I3_911_1_4748}>
            <View style={styles.View_I3_911_1_4748_1_610} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f05/c908/c679fb55d4a3576a009381cd18fdee93"
              }}
              style={styles.ImageBackground_I3_911_1_4748_1_611}
            />
          </View>
        </View>
        <View style={styles.View_I3_911_1_4581}>
          <View style={styles.View_I3_911_1_4745}>
            <View style={styles.View_I3_911_1_4745_1_597} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6e8/986c/e8ad5b2610901834c5263905bb304ade"
              }}
              style={styles.ImageBackground_I3_911_1_4745_1_598}
            />
          </View>
        </View>
        <View style={styles.View_I3_911_1_4585}>
          <View style={styles.View_I3_911_1_4742}>
            <View style={styles.View_I3_911_1_4742_1_635} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6fa/b3a6/2dca0aa50769573484f247e160c73355"
              }}
              style={styles.ImageBackground_I3_911_1_4742_1_636}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_7_116}>
        <View style={styles.View_I7_116_7_169}>
          <View style={styles.View_I7_116_7_170}>
            <Text style={styles.Text_I7_116_7_170}>Blocked users</Text>
          </View>
          <View style={styles.View_I7_116_7_171}>
            <Text style={styles.Text_I7_116_7_171}>14</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_117}>
        <View style={styles.View_I7_117_7_169}>
          <View style={styles.View_I7_117_7_170}>
            <Text style={styles.Text_I7_117_7_170}>Passcode &amp; Face ID</Text>
          </View>
          <View style={styles.View_I7_117_7_171}>
            <Text style={styles.Text_I7_117_7_171}>On</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_118}>
        <View style={styles.View_I7_118_7_169}>
          <View style={styles.View_I7_118_7_170}>
            <Text style={styles.Text_I7_118_7_170}>Two-Step verification</Text>
          </View>
          <View style={styles.View_I7_118_7_171}>
            <Text style={styles.Text_I7_118_7_171}>On</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_119}>
        <View style={styles.View_I7_119_7_169}>
          <View style={styles.View_I7_119_7_170}>
            <Text style={styles.Text_I7_119_7_170}>Phone number</Text>
          </View>
          <View style={styles.View_I7_119_7_171}>
            <Text style={styles.Text_I7_119_7_171}>Everybody</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_120}>
        <View style={styles.View_I7_120_7_169}>
          <View style={styles.View_I7_120_7_170}>
            <Text style={styles.Text_I7_120_7_170}>Last seen &amp; online</Text>
          </View>
          <View style={styles.View_I7_120_7_171}>
            <Text style={styles.Text_I7_120_7_171}>Nobody</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_131}>
        <View style={styles.View_I7_131_7_169}>
          <View style={styles.View_I7_131_7_170}>
            <Text style={styles.Text_I7_131_7_170}>Calls</Text>
          </View>
          <View style={styles.View_I7_131_7_171}>
            <Text style={styles.Text_I7_131_7_171}>Nobody</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_134}>
        <View style={styles.View_I7_134_7_169}>
          <View style={styles.View_I7_134_7_170}>
            <Text style={styles.Text_I7_134_7_170}>Groups</Text>
          </View>
          <View style={styles.View_I7_134_7_171}>
            <Text style={styles.Text_I7_134_7_171}>Everybody</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3_910: {
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
  View_I3_910_1_2725: {
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
  View_I3_910_1_2726: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68888346354167%"),
    top: hp("2.3679305946892075%")
  },
  View_I3_910_1_2727: {
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
  ImageBackground_I3_910_1_2728: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.5009218643271858%")
  },
  View_I3_910_1_2729: {
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
  ImageBackground_I3_910_1_2730: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I3_910_1_2734: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I3_910_1_2739: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_910_1_2740: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666666%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3_910_1_2740: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I3_910_1_2741: {
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
  View_I3_910_1_2742: {
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
  View_I3_910_1_2743: {
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
  View_I3_910_1_2743_1_1404: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_910_1_2743_1_1405: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.5464480874316937%")
  },
  View_I3_910_1_2744: {
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
  View_I3_910_1_2744_1_1416: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_910_1_2744_1_1417: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3_910_1_2745: {
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
  View_I3_910_1_2746: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3_910_1_2746: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_3_911: {
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
  View_I3_911_1_4580: {
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
  View_I3_911_1_4720: {
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
  View_I3_911_1_4720_1_1580: {
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
  View_I3_911_1_4583: {
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
  View_I3_911_1_4748: {
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
  View_I3_911_1_4748_1_610: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_911_1_4748_1_611: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  View_I3_911_1_4581: {
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
  View_I3_911_1_4745: {
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
  View_I3_911_1_4745_1_597: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_911_1_4745_1_598: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.9143898864912856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.728619684938522%")
  },
  View_I3_911_1_4585: {
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
  View_I3_911_1_4742: {
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
  View_I3_911_1_4742_1_635: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_911_1_4742_1_636: {
    flexGrow: 1,
    width: wp("5.6888890584309895%"),
    height: hp("3.0965390752573483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4222167968749986%"),
    top: hp("0.728619684938522%")
  },
  View_7_116: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_116_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_116_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_116_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_116_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_116_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.02185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_117_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_117_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_117_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_117_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_117_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.08196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_118_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_118_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_118_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_118_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_118_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_119: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.14207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_119_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_119_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_119_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_119_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_119_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_120: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_120_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_120_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_120_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_120_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_120_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_131: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69.26229508196722%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_131_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_131_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_131_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_131_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_131_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77.3224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_134_7_169: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_134_7_170: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_134_7_170: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_134_7_171: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("0%")
  },
  Text_I7_134_7_171: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
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
