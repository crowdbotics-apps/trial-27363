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
      <View style={styles.View_7_2353}>
        <View style={styles.View_I7_2353_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60da/107b/51bffa9b962499b5d3d63801758ab796"
            }}
            style={styles.ImageBackground_I7_2353_1_4898}
          />
          <View style={styles.View_I7_2353_1_4899}>
            <View style={styles.View_I7_2353_1_4900}>
              <Text style={styles.Text_I7_2353_1_4900}>Roger Schleifer</Text>
            </View>
            <View style={styles.View_I7_2353_1_4901}>
              <Text style={styles.Text_I7_2353_1_4901}>
                Last seen 15 min ago
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_2354}>
        <View style={styles.View_I7_2354_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/d39d/0da6030b2da508534801b6b53fd784d7"
            }}
            style={styles.ImageBackground_I7_2354_1_4898}
          />
          <View style={styles.View_I7_2354_1_4899}>
            <View style={styles.View_I7_2354_1_4900}>
              <Text style={styles.Text_I7_2354_1_4900}>Dulce Bator</Text>
            </View>
            <View style={styles.View_I7_2354_1_4901}>
              <Text style={styles.Text_I7_2354_1_4901}>Last seen Feb 24</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_2355}>
        <View style={styles.View_I7_2355_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0344/079e/13cb26ed3bbb688518f4297d95aea11e"
            }}
            style={styles.ImageBackground_I7_2355_1_4898}
          />
          <View style={styles.View_I7_2355_1_4899}>
            <View style={styles.View_I7_2355_1_4900}>
              <Text style={styles.Text_I7_2355_1_4900}>Omar Levin</Text>
            </View>
            <View style={styles.View_I7_2355_1_4901}>
              <Text style={styles.Text_I7_2355_1_4901}>Last seen Feb 12</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4934}>
        <View style={styles.View_I1_4934_1_4910}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038f/f41d/3d2b06f4e503d1c04acc2e7772ce962c"
            }}
            style={styles.ImageBackground_I1_4934_1_4911}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d92a/be4a/151ec13ef1647554db6ee675afa2783e"
            }}
            style={styles.ImageBackground_I1_4934_1_4912}
          />
          <View style={styles.View_I1_4934_1_4913}>
            <View style={styles.View_I1_4934_1_4914}>
              <Text style={styles.Text_I1_4934_1_4914}>Aspen Mango</Text>
            </View>
            <View style={styles.View_I1_4934_1_4915}>
              <Text style={styles.Text_I1_4934_1_4915}>Online</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4940}>
        <View style={styles.View_I1_4940_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e2/4cab/42248fb00941e725f2353da00638f203"
            }}
            style={styles.ImageBackground_I1_4940_1_4898}
          />
          <View style={styles.View_I1_4940_1_4899}>
            <View style={styles.View_I1_4940_1_4900}>
              <Text style={styles.Text_I1_4940_1_4900}>Livia Herwitz</Text>
            </View>
            <View style={styles.View_I1_4940_1_4901}>
              <Text style={styles.Text_I1_4940_1_4901}>
                Last seen 5 min ago
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4946}>
        <View style={styles.View_I1_4946_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ce0/cea8/e74a729b164ae289f3341e447dae4759"
            }}
            style={styles.ImageBackground_I1_4946_1_4898}
          />
          <View style={styles.View_I1_4946_1_4899}>
            <View style={styles.View_I1_4946_1_4900}>
              <Text style={styles.Text_I1_4946_1_4900}>Giana Torff</Text>
            </View>
            <View style={styles.View_I1_4946_1_4901}>
              <Text style={styles.Text_I1_4946_1_4901}>Last seen Feb 15</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4952}>
        <View style={styles.View_I1_4952_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bda/21e2/607f6c67191961b28ce17aaa728f02e0"
            }}
            style={styles.ImageBackground_I1_4952_1_4898}
          />
          <View style={styles.View_I1_4952_1_4899}>
            <View style={styles.View_I1_4952_1_4900}>
              <Text style={styles.Text_I1_4952_1_4900}>Emerson Herwitz</Text>
            </View>
            <View style={styles.View_I1_4952_1_4901}>
              <Text style={styles.Text_I1_4952_1_4901}>
                Last seen 2 hours ago
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4958}>
        <View style={styles.View_I1_4958_1_4897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe13/7366/00a471f9754b9ac58bade0f43b17bf15"
            }}
            style={styles.ImageBackground_I1_4958_1_4898}
          />
          <View style={styles.View_I1_4958_1_4899}>
            <View style={styles.View_I1_4958_1_4900}>
              <Text style={styles.Text_I1_4958_1_4900}>Ruben Dias</Text>
            </View>
            <View style={styles.View_I1_4958_1_4901}>
              <Text style={styles.Text_I1_4958_1_4901}>
                Last seen 3 hours ago
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4787}>
        <View style={styles.View_I1_4787_1_2983}>
          <View style={styles.View_I1_4787_1_2984}>
            <View style={styles.View_I1_4787_1_2985} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bab/5000/7d9c1b521c0f1654220d140bac3910c7"
              }}
              style={styles.ImageBackground_I1_4787_1_2986}
            />
            <View style={styles.View_I1_4787_1_2987} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/affa/32aa1864f326bf8cb3822b101852c482"
            }}
            style={styles.ImageBackground_I1_4787_1_2988}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/971a/6abab0c931368a5de9899b90e55498bd"
            }}
            style={styles.ImageBackground_I1_4787_1_2992}
          />
          <View style={styles.View_I1_4787_1_2997}>
            <View style={styles.View_I1_4787_1_2998}>
              <Text style={styles.Text_I1_4787_1_2998}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1_4787_1_2999}>
          <View style={styles.View_I1_4787_1_3000}>
            <View style={styles.View_I1_4787_1_3001}>
              <View style={styles.View_I1_4787_1_3001_1_1389} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e3b/a3f4/1cfe2a70188bbfc959ca00b6e2c04d2d"
                }}
                style={styles.ImageBackground_I1_4787_1_3001_1_1390}
              />
            </View>
            <View style={styles.View_I1_4787_1_3002}>
              <View style={styles.View_I1_4787_1_3002_1_1416} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0e/4648/a4bc93982ef35a9019232691105725fc"
                }}
                style={styles.ImageBackground_I1_4787_1_3002_1_1417}
              />
            </View>
            <View style={styles.View_I1_4787_1_3003}>
              <View style={styles.View_I1_4787_1_3003_1_1392} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c83/d795/9308eea2f984695e40d71b68efbf2c34"
                }}
                style={styles.ImageBackground_I1_4787_1_3003_1_1393}
              />
            </View>
          </View>
          <View style={styles.View_I1_4787_1_3004}>
            <View style={styles.View_I1_4787_1_3005}>
              <Text style={styles.Text_I1_4787_1_3005}>Contacts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_4849}>
        <View style={styles.View_I1_4849_1_4580} />
        <View style={styles.View_I1_4849_1_4720}>
          <View style={styles.View_I1_4849_1_4720_1_1580} />
        </View>
        <View style={styles.View_I1_4849_1_4583}>
          <View style={styles.View_I1_4849_1_4748}>
            <View style={styles.View_I1_4849_1_4748_1_610} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd6/4456/26a2b0cb310f29dc2861d0a176daa835"
              }}
              style={styles.ImageBackground_I1_4849_1_4748_1_611}
            />
          </View>
        </View>
        <View style={styles.View_I1_4849_1_4581}>
          <View style={styles.View_I1_4849_1_4745}>
            <View style={styles.View_I1_4849_1_4745_1_597} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6e8/986c/e8ad5b2610901834c5263905bb304ade"
              }}
              style={styles.ImageBackground_I1_4849_1_4745_1_598}
            />
          </View>
        </View>
        <View style={styles.View_I1_4849_1_4585}>
          <View style={styles.View_I1_4849_1_4742}>
            <View style={styles.View_I1_4849_1_4742_1_635} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c997/0ea8/e7f9993b580317e29ddf39b82c2f1271"
              }}
              style={styles.ImageBackground_I1_4849_1_4742_1_636}
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
  View_7_2353: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_2353_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I7_2353_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I7_2353_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I7_2353_1_4900: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_2353_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_2353_1_4901: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I7_2353_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2354: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.92349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_2354_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I7_2354_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I7_2354_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I7_2354_1_4900: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_2354_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_2354_1_4901: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I7_2354_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2355: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.71584699453553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_2355_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I7_2355_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I7_2355_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I7_2355_1_4900: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_2355_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_2355_1_4901: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I7_2355_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_4934: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_4934_1_4910: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_4934_1_4911: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I1_4934_1_4912: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("4.781420765027324%")
  },
  View_I1_4934_1_4913: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_4934_1_4914: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_4934_1_4914: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_4934_1_4915: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%")
  },
  Text_I1_4934_1_4915: {
    color: "rgba(86, 227, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_4940: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_4940_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_4940_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_4940_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_4940_1_4900: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_4940_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_4940_1_4901: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I1_4940_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_4946: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.1311475409836%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_4946_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_4946_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_4946_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_4946_1_4900: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_4946_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_4946_1_4901: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I1_4946_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_4952: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.54644808743169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_4952_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_4952_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_4952_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_4952_1_4900: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_4952_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_4952_1_4901: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306001%")
  },
  Text_I1_4952_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_4958: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.338797814207645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_4958_1_4897: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_4958_1_4898: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_4958_1_4899: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_4958_1_4900: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_4958_1_4900: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_4958_1_4901: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%")
  },
  Text_I1_4958_1_4901: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_4787: {
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
  View_I1_4787_1_2983: {
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
  View_I1_4787_1_2984: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68888346354167%"),
    top: hp("2.3679389328253073%")
  },
  View_I1_4787_1_2985: {
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
  ImageBackground_I1_4787_1_2986: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.500913526191086%")
  },
  View_I1_4787_1_2987: {
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
  ImageBackground_I1_4787_1_2988: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I1_4787_1_2992: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I1_4787_1_2997: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_4787_1_2998: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666666%"),
    top: hp("0.9562841530054645%")
  },
  Text_I1_4787_1_2998: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I1_4787_1_2999: {
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
  View_I1_4787_1_3000: {
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
  View_I1_4787_1_3001: {
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
  View_I1_4787_1_3001_1_1389: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_4787_1_3001_1_1390: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999989%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_4787_1_3002: {
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
  View_I1_4787_1_3002_1_1416: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_4787_1_3002_1_1417: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_4787_1_3003: {
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
  View_I1_4787_1_3003_1_1392: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_4787_1_3003_1_1393: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316937%")
  },
  View_I1_4787_1_3004: {
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
  View_I1_4787_1_3005: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_4787_1_3005: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_1_4849: {
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
  View_I1_4849_1_4580: {
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
  View_I1_4849_1_4720: {
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
  View_I1_4849_1_4720_1_1580: {
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
  View_I1_4849_1_4583: {
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
  View_I1_4849_1_4748: {
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
  View_I1_4849_1_4748_1_610: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_4849_1_4748_1_611: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  View_I1_4849_1_4581: {
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
  View_I1_4849_1_4745: {
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
  View_I1_4849_1_4745_1_597: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_4849_1_4745_1_598: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.9143898864912856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.728603008666326%")
  },
  View_I1_4849_1_4585: {
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
  View_I1_4849_1_4742: {
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
  View_I1_4849_1_4742_1_635: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_4849_1_4742_1_636: {
    flexGrow: 1,
    width: wp("5.6888890584309895%"),
    height: hp("3.0965390752573483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4222229003906257%"),
    top: hp("0.728603008666326%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
