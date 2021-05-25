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
      <View style={styles.View_1_5589}>
        <View style={styles.View_I1_5589_1_1571} />
        <View style={styles.View_I1_5589_1_1572}>
          <View style={styles.View_I1_5589_1_1573} />
        </View>
      </View>
      <View style={styles.View_1_5686}>
        <View style={styles.View_I1_5686_1_5577}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d923/ab45/bc5b1cbe09da569499ea224e833dd40c"
            }}
            style={styles.ImageBackground_I1_5686_1_5568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8652/7146/2cb18acceb0fc009547e182ad323800c"
            }}
            style={styles.ImageBackground_I1_5686_1_5571}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fe/6dd2/4886a158b5e0e37f4f6b8ca5c626aaa0"
            }}
            style={styles.ImageBackground_I1_5686_1_5574}
          />
        </View>
        <View style={styles.View_I1_5686_1_5578}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56d5/dc65/4ed9d1587ddf99a8800d840fe64ceda5"
            }}
            style={styles.ImageBackground_I1_5686_1_5569}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d67/fce9/bbb4fa9a3d0c274358fb737e11b3583e"
            }}
            style={styles.ImageBackground_I1_5686_1_5572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/167f/319f/1d034e096b7936e0c9ad6a7d55adfcee"
            }}
            style={styles.ImageBackground_I1_5686_1_5575}
          />
        </View>
        <View style={styles.View_I1_5686_1_5579}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b30/3735/4acde76a2c7e8cc67c989ac92649655d"
            }}
            style={styles.ImageBackground_I1_5686_1_5570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37e0/6c24/8173ed3bccb13793d0b9a183811f7389"
            }}
            style={styles.ImageBackground_I1_5686_1_5573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afb6/34f9/52eaa4c071f8fa6b814a592aa619f8dd"
            }}
            style={styles.ImageBackground_I1_5686_1_5576}
          />
        </View>
        <View style={styles.View_I1_5686_1_5580}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c43/23f9/3444c4c90781a10ca17f2b3906af9840"
            }}
            style={styles.ImageBackground_I1_5686_1_5565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14a/0400/92cf4c29f8f863a9be7834dd889e9075"
            }}
            style={styles.ImageBackground_I1_5686_1_5566}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b19/332c/06355a14e9431073aa837d544cf50719"
            }}
            style={styles.ImageBackground_I1_5686_1_5567}
          />
        </View>
        <View style={styles.View_I1_5686_1_5581}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6989/66e0/7b33c221e9b100d91315873036a46e8d"
            }}
            style={styles.ImageBackground_I1_5686_1_5582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e638/23ce/bf2a3501a326bcb7e1f75362990697f8"
            }}
            style={styles.ImageBackground_I1_5686_1_5583}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb8/0819/688d62f69f6925af9c777d8f1ae4d9d2"
            }}
            style={styles.ImageBackground_I1_5686_1_5584}
          />
        </View>
      </View>
      <View style={styles.View_1_5595}>
        <View style={styles.View_I1_5595_1_1619}>
          <View style={styles.View_I1_5595_1_2258}>
            <View style={styles.View_I1_5595_1_2251}>
              <View style={styles.View_I1_5595_1_2251_1_1389} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e3b/a3f4/1cfe2a70188bbfc959ca00b6e2c04d2d"
                }}
                style={styles.ImageBackground_I1_5595_1_2251_1_1390}
              />
            </View>
            <View style={styles.View_I1_5595_1_2254}>
              <View style={styles.View_I1_5595_1_2254_1_1416} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0e/4648/a4bc93982ef35a9019232691105725fc"
                }}
                style={styles.ImageBackground_I1_5595_1_2254_1_1417}
              />
            </View>
            <View style={styles.View_I1_5595_1_2493}>
              <View style={styles.View_I1_5595_1_2493_1_1434} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50a6/047e/a14cc6e86a9d19b9062a33d3e419d649"
                }}
                style={styles.ImageBackground_I1_5595_1_2493_1_1435}
              />
            </View>
          </View>
          <View style={styles.View_I1_5595_1_1623}>
            <View style={styles.View_I1_5595_1_1624}>
              <Text style={styles.Text_I1_5595_1_1624}>Designers</Text>
            </View>
            <View style={styles.View_I1_5595_1_1625}>
              <Text style={styles.Text_I1_5595_1_1625}>5 members</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_5596}>
        <View style={styles.View_I1_5596_1_5144} />
        <View style={styles.View_I1_5596_1_5145}>
          <View style={styles.View_I1_5596_1_5146}>
            <View style={styles.View_I1_5596_1_5146_1_5140}>
              <View style={styles.View_I1_5596_1_5146_1_5141}>
                <Text style={styles.Text_I1_5596_1_5146_1_5141}>Members</Text>
              </View>
            </View>
            <View style={styles.View_I1_5596_1_5146_1_5142} />
          </View>
          <View style={styles.View_I1_5596_1_5147}>
            <View style={styles.View_I1_5596_1_5147_1_5136}>
              <View style={styles.View_I1_5596_1_5147_1_5137}>
                <Text style={styles.Text_I1_5596_1_5147_1_5137}>Media</Text>
              </View>
            </View>
            <View style={styles.View_I1_5596_1_5147_1_5138} />
          </View>
          <View style={styles.View_I1_5596_1_5162}>
            <View style={styles.View_I1_5596_1_5162_1_5140}>
              <View style={styles.View_I1_5596_1_5162_1_5141}>
                <Text style={styles.Text_I1_5596_1_5162_1_5141}>Voice</Text>
              </View>
            </View>
            <View style={styles.View_I1_5596_1_5162_1_5142} />
          </View>
        </View>
      </View>
      <View style={styles.View_1_5721}>
        <View style={styles.View_I1_5721_1_1580} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1_5589: {
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
  View_I1_5589_1_1571: {
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
  View_I1_5589_1_1572: {
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
  View_I1_5589_1_1573: {
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
  View_1_5686: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85.65573770491804%"),
    minHeight: hp("85.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_5686_1_5577: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_5686_1_5568: {
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
  ImageBackground_I1_5686_1_5571: {
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
  ImageBackground_I1_5686_1_5574: {
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
  View_I1_5686_1_5578: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("17.89617486338797%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_5686_1_5569: {
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
  ImageBackground_I1_5686_1_5572: {
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
  ImageBackground_I1_5686_1_5575: {
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
  View_I1_5686_1_5579: {
    flexGrow: 1,
    width: wp("97.33333333333334%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("34.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_5686_1_5570: {
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
  ImageBackground_I1_5686_1_5573: {
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
  ImageBackground_I1_5686_1_5576: {
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
  View_I1_5686_1_5580: {
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
  ImageBackground_I1_5686_1_5565: {
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
  ImageBackground_I1_5686_1_5566: {
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
  ImageBackground_I1_5686_1_5567: {
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
  View_I1_5686_1_5581: {
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
  ImageBackground_I1_5686_1_5582: {
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
  ImageBackground_I1_5686_1_5583: {
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
  ImageBackground_I1_5686_1_5584: {
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
  View_1_5595: {
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
  View_I1_5595_1_1619: {
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
  View_I1_5595_1_2258: {
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
  View_I1_5595_1_2251: {
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
  View_I1_5595_1_2251_1_1389: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5595_1_2251_1_1390: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999989%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_5595_1_2254: {
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
  View_I1_5595_1_2254_1_1416: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5595_1_2254_1_1417: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_5595_1_2493: {
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
  View_I1_5595_1_2493_1_1434: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_5595_1_2493_1_1435: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.459016914576129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I1_5595_1_1623: {
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
  View_I1_5595_1_1624: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1_5595_1_1624: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I1_5595_1_1625: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896178%")
  },
  Text_I1_5595_1_1625: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_5596: {
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
  View_I1_5596_1_5144: {
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
  View_I1_5596_1_5145: {
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
  View_I1_5596_1_5146: {
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
  View_I1_5596_1_5146_1_5140: {
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
  View_I1_5596_1_5146_1_5141: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I1_5596_1_5146_1_5141: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5596_1_5146_1_5142: {
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
  View_I1_5596_1_5147: {
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
  View_I1_5596_1_5147_1_5136: {
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
  View_I1_5596_1_5147_1_5137: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("0%")
  },
  Text_I1_5596_1_5147_1_5137: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5596_1_5147_1_5138: {
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
  View_I1_5596_1_5162: {
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
  View_I1_5596_1_5162_1_5140: {
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
  View_I1_5596_1_5162_1_5141: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000013%"),
    top: hp("0%")
  },
  Text_I1_5596_1_5162_1_5141: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_5596_1_5162_1_5142: {
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
  View_1_5721: {
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
  View_I1_5721_1_1580: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
