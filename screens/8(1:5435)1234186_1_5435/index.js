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
      <View style={styles.View_1_5436}>
        <View style={styles.View_I1_5436_1_1571} />
        <View style={styles.View_I1_5436_1_1572}>
          <View style={styles.View_I1_5436_1_1573} />
        </View>
      </View>
      <View style={styles.View_1_5518}>
        <View style={styles.View_I1_5518_1_4903}>
          <View style={styles.View_I1_5518_1_4904} />
          <View style={styles.View_I1_5518_1_4931}>
            <View style={styles.View_I1_5518_1_4931_1_1431} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b433/c783/828dc494a6727a7aaade94bdeecce110"
              }}
              style={styles.ImageBackground_I1_5518_1_4931_1_1432}
            />
          </View>
          <View style={styles.View_I1_5518_1_4906}>
            <View style={styles.View_I1_5518_1_4907}>
              <Text style={styles.Text_I1_5518_1_4907}>Aspen Mango</Text>
            </View>
            <View style={styles.View_I1_5518_1_4908}>
              <Text style={styles.Text_I1_5518_1_4908}>0:20, Today, 1:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5519}>
        <View style={styles.View_I1_5519_1_4903}>
          <View style={styles.View_I1_5519_1_4904} />
          <View style={styles.View_I1_5519_1_4931}>
            <View style={styles.View_I1_5519_1_4931_1_1437} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd06/b888/eaaf784b4701420c2dadc3d8de71d16a"
              }}
              style={styles.ImageBackground_I1_5519_1_4931_1_1438}
            />
          </View>
          <View style={styles.View_I1_5519_1_4906}>
            <View style={styles.View_I1_5519_1_4907}>
              <Text style={styles.Text_I1_5519_1_4907}>Aspen Mango</Text>
            </View>
            <View style={styles.View_I1_5519_1_4908}>
              <Text style={styles.Text_I1_5519_1_4908}>0:16, Dec 20, 2:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5520}>
        <View style={styles.View_I1_5520_1_4903}>
          <View style={styles.View_I1_5520_1_4904} />
          <View style={styles.View_I1_5520_1_4931}>
            <View style={styles.View_I1_5520_1_4931_1_1431} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b433/c783/828dc494a6727a7aaade94bdeecce110"
              }}
              style={styles.ImageBackground_I1_5520_1_4931_1_1432}
            />
          </View>
          <View style={styles.View_I1_5520_1_4906}>
            <View style={styles.View_I1_5520_1_4907}>
              <Text style={styles.Text_I1_5520_1_4907}>Ruben Dias</Text>
            </View>
            <View style={styles.View_I1_5520_1_4908}>
              <Text style={styles.Text_I1_5520_1_4908}>
                1:20, Dec 25, 20:14
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5521}>
        <View style={styles.View_I1_5521_1_4903}>
          <View style={styles.View_I1_5521_1_4904} />
          <View style={styles.View_I1_5521_1_4931}>
            <View style={styles.View_I1_5521_1_4931_1_1431} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b433/c783/828dc494a6727a7aaade94bdeecce110"
              }}
              style={styles.ImageBackground_I1_5521_1_4931_1_1432}
            />
          </View>
          <View style={styles.View_I1_5521_1_4906}>
            <View style={styles.View_I1_5521_1_4907}>
              <Text style={styles.Text_I1_5521_1_4907}>Livia Herwitz</Text>
            </View>
            <View style={styles.View_I1_5521_1_4908}>
              <Text style={styles.Text_I1_5521_1_4908}>3:10, Nov 1, 13:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5522}>
        <View style={styles.View_I1_5522_1_4903}>
          <View style={styles.View_I1_5522_1_4904} />
          <View style={styles.View_I1_5522_1_4931}>
            <View style={styles.View_I1_5522_1_4931_1_1431} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b433/c783/828dc494a6727a7aaade94bdeecce110"
              }}
              style={styles.ImageBackground_I1_5522_1_4931_1_1432}
            />
          </View>
          <View style={styles.View_I1_5522_1_4906}>
            <View style={styles.View_I1_5522_1_4907}>
              <Text style={styles.Text_I1_5522_1_4907}>Giana Torff</Text>
            </View>
            <View style={styles.View_I1_5522_1_4908}>
              <Text style={styles.Text_I1_5522_1_4908}>
                0:11, Oct 25, 11:30
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5442}>
        <View style={styles.View_I1_5442_1_1619}>
          <View style={styles.View_I1_5442_1_2258}>
            <View style={styles.View_I1_5442_1_2251}>
              <View style={styles.View_I1_5442_1_2251_1_1389} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e3b/a3f4/1cfe2a70188bbfc959ca00b6e2c04d2d"
                }}
                style={styles.ImageBackground_I1_5442_1_2251_1_1390}
              />
            </View>
            <View style={styles.View_I1_5442_1_2254}>
              <View style={styles.View_I1_5442_1_2254_1_1416} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0e/4648/a4bc93982ef35a9019232691105725fc"
                }}
                style={styles.ImageBackground_I1_5442_1_2254_1_1417}
              />
            </View>
            <View style={styles.View_I1_5442_1_2493}>
              <View style={styles.View_I1_5442_1_2493_1_1434} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50a6/047e/a14cc6e86a9d19b9062a33d3e419d649"
                }}
                style={styles.ImageBackground_I1_5442_1_2493_1_1435}
              />
            </View>
          </View>
          <View style={styles.View_I1_5442_1_1623}>
            <View style={styles.View_I1_5442_1_1624}>
              <Text style={styles.Text_I1_5442_1_1624}>Designers</Text>
            </View>
            <View style={styles.View_I1_5442_1_1625}>
              <Text style={styles.Text_I1_5442_1_1625}>5 members</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5443}>
        <View style={styles.View_I1_5443_1_5144} />
        <View style={styles.View_I1_5443_1_5145}>
          <View style={styles.View_I1_5443_1_5146}>
            <View style={styles.View_I1_5443_1_5146_1_5140}>
              <View style={styles.View_I1_5443_1_5146_1_5141}>
                <Text style={styles.Text_I1_5443_1_5146_1_5141}>Members</Text>
              </View>
            </View>
            <View style={styles.View_I1_5443_1_5146_1_5142} />
          </View>
          <View style={styles.View_I1_5443_1_5147}>
            <View style={styles.View_I1_5443_1_5147_1_5140}>
              <View style={styles.View_I1_5443_1_5147_1_5141}>
                <Text style={styles.Text_I1_5443_1_5147_1_5141}>Media</Text>
              </View>
            </View>
            <View style={styles.View_I1_5443_1_5147_1_5142} />
          </View>
          <View style={styles.View_I1_5443_1_5162}>
            <View style={styles.View_I1_5443_1_5162_1_5136}>
              <View style={styles.View_I1_5443_1_5162_1_5137}>
                <Text style={styles.Text_I1_5443_1_5162_1_5137}>Voice</Text>
              </View>
            </View>
            <View style={styles.View_I1_5443_1_5162_1_5138} />
          </View>
        </View>
      </View>
      <View style={styles.View_1_5723}>
        <View style={styles.View_I1_5723_1_1580} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1_5436: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.27868852459017%"),
    minHeight: hp("103.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5436_1_1571: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("103.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I1_5436_1_1572: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5436_1_1573: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("1.3661202185792343%"),
    backgroundColor: "rgba(233, 236, 239, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_5518: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5518_1_4903: {
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
  View_I1_5518_1_4904: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(248, 249, 250, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_5518_1_4931: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5518_1_4931_1_1431: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5518_1_4931_1_1432: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.5464480874316919%")
  },
  View_I1_5518_1_4906: {
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
  View_I1_5518_1_4907: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5518_1_4907: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5518_1_4908: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%")
  },
  Text_I1_5518_1_4908: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5519: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5519_1_4903: {
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
  View_I1_5519_1_4904: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185793542%"),
    backgroundColor: "rgba(248, 249, 250, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_5519_1_4931: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5519_1_4931_1_1437: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5519_1_4931_1_1438: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0.5464480874316919%")
  },
  View_I1_5519_1_4906: {
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
  View_I1_5519_1_4907: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5519_1_4907: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5519_1_4908: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%")
  },
  Text_I1_5519_1_4908: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5520: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5520_1_4903: {
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
  View_I1_5520_1_4904: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(248, 249, 250, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_5520_1_4931: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5520_1_4931_1_1431: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5520_1_4931_1_1432: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.546448087431699%")
  },
  View_I1_5520_1_4906: {
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
  View_I1_5520_1_4907: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5520_1_4907: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5520_1_4908: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I1_5520_1_4908: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5521: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5521_1_4903: {
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
  View_I1_5521_1_4904: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(248, 249, 250, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_5521_1_4931: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5521_1_4931_1_1431: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5521_1_4931_1_1432: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.5464480874316848%")
  },
  View_I1_5521_1_4906: {
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
  View_I1_5521_1_4907: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5521_1_4907: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5521_1_4908: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I1_5521_1_4908: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5522: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5522_1_4903: {
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
  View_I1_5522_1_4904: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(248, 249, 250, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I1_5522_1_4931: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5522_1_4931_1_1431: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5522_1_4931_1_1432: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.546448087431699%")
  },
  View_I1_5522_1_4906: {
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
  View_I1_5522_1_4907: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5522_1_4907: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5522_1_4908: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  Text_I1_5522_1_4908: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5442: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)"
  },
  View_I1_5442_1_1619: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5442_1_2258: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.371584699453553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5442_1_2251: {
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
  View_I1_5442_1_2251_1_1389: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5442_1_2251_1_1390: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999989%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_5442_1_2254: {
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
  View_I1_5442_1_2254_1_1416: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5442_1_2254_1_1417: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_5442_1_2493: {
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
  View_I1_5442_1_2493_1_1434: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5442_1_2493_1_1435: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.459016914576129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_5442_1_1623: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.114754098360654%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5442_1_1624: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5442_1_1624: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I1_5442_1_1625: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896178%")
  },
  Text_I1_5442_1_1625: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5443: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.43169398907104%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)",
    overflow: "hidden"
  },
  View_I1_5443_1_5144: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_I1_5443_1_5145: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5146: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5146_1_5140: {
    flexGrow: 1,
    width: wp("33.06666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5146_1_5141: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I1_5443_1_5146_1_5141: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5443_1_5146_1_5142: {
    flexGrow: 1,
    width: wp("33.06666666666666%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  },
  View_I1_5443_1_5147: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5147_1_5140: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5147_1_5141: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("0%")
  },
  Text_I1_5443_1_5147_1_5141: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5443_1_5147_1_5142: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  },
  View_I1_5443_1_5162: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5162_1_5136: {
    flexGrow: 1,
    width: wp("24.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5443_1_5162_1_5137: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000013%"),
    top: hp("0%")
  },
  Text_I1_5443_1_5162_1_5137: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5443_1_5162_1_5138: {
    flexGrow: 1,
    width: wp("24.8%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(33, 37, 41, 1)"
  },
  View_1_5723: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105.46448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5723_1_1580: {
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
