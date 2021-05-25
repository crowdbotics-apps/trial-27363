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
      <View style={styles.View_7_1668}>
        <View style={styles.View_7_1669}>
          <ImageBackground style={styles.ImageBackground_I7_1669_7_466} />
        </View>
        <View style={styles.View_7_1670}>
          <View style={styles.View_I7_1670_7_239}>
            <View style={styles.View_I7_1670_7_240}>
              <Text style={styles.Text_I7_1670_7_240}>look at this photo</Text>
            </View>
          </View>
          <View style={styles.View_I7_1670_7_241}>
            <View style={styles.View_I7_1670_7_242}>
              <Text style={styles.Text_I7_1670_7_242}>12:30</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_7_1672}>
          <View style={styles.View_I7_1672_7_278}>
            <View style={styles.View_I7_1672_7_279}>
              <Text style={styles.Text_I7_1672_7_279}>😲😲😲</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_7_1673}>
          <View style={styles.View_I7_1673_7_686}>
            <View style={styles.View_I7_1673_7_687}>
              <View style={styles.View_I7_1673_7_687_1_1531} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db42/4b37/6a570be129ed76815e4762080edb7cec"
                }}
                style={styles.ImageBackground_I7_1673_7_687_1_1532}
              />
            </View>
            <View style={styles.View_I7_1673_7_688}>
              <View style={styles.View_I7_1673_7_689} />
              <View style={styles.View_I7_1673_7_690} />
              <View style={styles.View_I7_1673_7_691} />
              <View style={styles.View_I7_1673_7_692} />
              <View style={styles.View_I7_1673_7_693} />
              <View style={styles.View_I7_1673_7_694} />
              <View style={styles.View_I7_1673_7_695} />
              <View style={styles.View_I7_1673_7_696} />
              <View style={styles.View_I7_1673_7_697} />
              <View style={styles.View_I7_1673_7_698} />
              <View style={styles.View_I7_1673_7_699} />
              <View style={styles.View_I7_1673_7_700} />
              <View style={styles.View_I7_1673_7_701} />
              <View style={styles.View_I7_1673_7_702} />
              <View style={styles.View_I7_1673_7_703} />
              <View style={styles.View_I7_1673_7_704} />
              <View style={styles.View_I7_1673_7_705} />
              <View style={styles.View_I7_1673_7_706} />
              <View style={styles.View_I7_1673_7_707} />
              <View style={styles.View_I7_1673_7_708} />
              <View style={styles.View_I7_1673_7_709} />
              <View style={styles.View_I7_1673_7_710} />
              <View style={styles.View_I7_1673_7_711} />
              <View style={styles.View_I7_1673_7_712} />
              <View style={styles.View_I7_1673_7_713} />
              <View style={styles.View_I7_1673_7_714} />
              <View style={styles.View_I7_1673_7_715} />
              <View style={styles.View_I7_1673_7_716} />
              <View style={styles.View_I7_1673_7_717} />
              <View style={styles.View_I7_1673_7_718} />
              <View style={styles.View_I7_1673_7_719} />
              <View style={styles.View_I7_1673_7_720} />
              <View style={styles.View_I7_1673_7_721} />
            </View>
            <View style={styles.View_I7_1673_7_722}>
              <Text style={styles.Text_I7_1673_7_722}>00:15</Text>
            </View>
          </View>
          <View style={styles.View_I7_1673_7_723}>
            <View style={styles.View_I7_1673_7_724}>
              <Text style={styles.Text_I7_1673_7_724}>12:30</Text>
            </View>
            <View style={styles.View_I7_1673_7_1852}>
              <View style={styles.View_I7_1673_7_1852_1_1528} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aaa/0a15/ce4790056dc77dbdf4017a50df0bc574"
                }}
                style={styles.ImageBackground_I7_1673_7_1852_1_1529}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_9_1577}>
          <View style={styles.View_I9_1577_7_256}>
            <View style={styles.View_I9_1577_7_257}>
              <Text style={styles.Text_I9_1577_7_257}>haha</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_1669}>
          <View style={styles.View_I9_1669_7_239}>
            <View style={styles.View_I9_1669_7_240}>
              <Text style={styles.Text_I9_1669_7_240}>soo, what’s up?</Text>
            </View>
          </View>
          <View style={styles.View_I9_1669_7_241}>
            <View style={styles.View_I9_1669_7_242}>
              <Text style={styles.Text_I9_1669_7_242}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_1666}>
        <View style={styles.View_I7_1666_1_6274}>
          <View style={styles.View_I7_1666_1_6275}>
            <View style={styles.View_I7_1666_1_6276}>
              <Text style={styles.Text_I7_1666_1_6276}>nothing</Text>
            </View>
            <View style={styles.View_I7_1666_1_6277}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e467/cfc9/2eb157a6dccbc1f042cde82523f4d598"
                }}
                style={styles.ImageBackground_I7_1666_1_6278}
              />
              <View style={styles.View_I7_1666_1_6342}>
                <View style={styles.View_I7_1666_1_6342_1_1510} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d5/82fb/233ebfd006bbbb45616f29918c9beb60"
                  }}
                  style={styles.ImageBackground_I7_1666_1_6342_1_1511}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I7_1666_1_6333}>
            <View style={styles.View_I7_1666_1_6333_1_1380} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca18/24eb/d1618c9702be337ef2aa9731825cbc8c"
              }}
              style={styles.ImageBackground_I7_1666_1_6333_1_1381}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_7_1667}>
        <View style={styles.View_I7_1667_1_1580} />
      </View>
      <View style={styles.View_7_2601}>
        <View style={styles.View_I7_2601_1_3686}>
          <View style={styles.View_I7_2601_1_3687}>
            <View style={styles.View_I7_2601_1_3688} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bab/5000/7d9c1b521c0f1654220d140bac3910c7"
              }}
              style={styles.ImageBackground_I7_2601_1_3689}
            />
            <View style={styles.View_I7_2601_1_3690} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/affa/32aa1864f326bf8cb3822b101852c482"
            }}
            style={styles.ImageBackground_I7_2601_1_3691}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/971a/6abab0c931368a5de9899b90e55498bd"
            }}
            style={styles.ImageBackground_I7_2601_1_3695}
          />
          <View style={styles.View_I7_2601_1_3700}>
            <View style={styles.View_I7_2601_1_3701}>
              <Text style={styles.Text_I7_2601_1_3701}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I7_2601_1_3702}>
          <View style={styles.View_I7_2601_1_3703}>
            <View style={styles.View_I7_2601_1_3704}>
              <View style={styles.View_I7_2601_1_3704_1_1404} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099e/3e24/943efea4ea0234b3fc105d5cf9983a9c"
                }}
                style={styles.ImageBackground_I7_2601_1_3704_1_1405}
              />
            </View>
            <View style={styles.View_I7_2601_1_3705}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038f/f41d/3d2b06f4e503d1c04acc2e7772ce962c"
                }}
                style={styles.ImageBackground_I7_2601_1_3706}
              />
              <View style={styles.View_I7_2601_1_3707}>
                <View style={styles.View_I7_2601_1_3708}>
                  <Text style={styles.Text_I7_2601_1_3708}>Aspen Mango</Text>
                </View>
                <View style={styles.View_I7_2601_1_3709}>
                  <Text style={styles.Text_I7_2601_1_3709}>
                    Last seen 5 min ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I7_2601_1_3710}>
              <View style={styles.View_I7_2601_1_3710_1_1376} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af84/54da/f1adc1bc636df6cbf2e47bfc4087d8bf"
                }}
                style={styles.ImageBackground_I7_2601_1_3710_1_1377}
              />
            </View>
            <View style={styles.View_I7_2601_1_3711}>
              <View style={styles.View_I7_2601_1_3711_1_1392} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c83/d795/9308eea2f984695e40d71b68efbf2c34"
                }}
                style={styles.ImageBackground_I7_2601_1_3711_1_1393}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_7_1668: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93.44262295081968%"),
    minHeight: hp("93.44262295081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_1669: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.994535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I7_1669_7_466: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    height: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_1670: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1670_7_239: {
    flexGrow: 1,
    width: wp("40.8%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I7_1670_7_240: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  Text_I7_1670_7_240: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_1670_7_241: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606568%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1670_7_242: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.5464480874316919%")
  },
  Text_I7_1670_7_242: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1672: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1672_7_278: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_I7_1672_7_279: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.63934426229509%")
  },
  Text_I7_1672_7_279: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1673: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.34426229508196%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1673_7_686: {
    flexGrow: 1,
    width: wp("58.4%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_I7_1673_7_687: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.9808743169399037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1673_7_687_1_1531: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_1673_7_687_1_1532: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8888834635416671%"),
    top: hp("0.3643098424692539%")
  },
  View_I7_1673_7_688: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    top: hp("1.639344262295083%")
  },
  View_I7_1673_7_689: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_690: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_691: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_692: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_693: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666659%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_694: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_695: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_696: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.4666666666666615%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_697: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_698: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_699: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_700: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333341%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_701: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_702: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_703: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.93333333333333%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_704: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_705: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_706: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333326%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_707: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.200000000000003%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_708: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_709: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_710: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.39999999999999%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_711: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_712: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_713: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.599999999999994%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_714: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666667%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_715: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_716: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_717: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666666%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_718: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.933333333333337%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_719: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_720: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_721: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_I7_1673_7_722: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666666%"),
    top: hp("2.0491803278688536%")
  },
  Text_I7_1673_7_722: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_1673_7_723: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1673_7_724: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("0.546448087431699%")
  },
  Text_I7_1673_7_724: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_1673_7_1852: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999989%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1673_7_1852_1_1528: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_1673_7_1852_1_1529: {
    flexGrow: 1,
    width: wp("2.933343760172526%"),
    height: hp("1.0929068581002657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333997%"),
    top: hp("0.2732240437158424%")
  },
  View_9_1577: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.72677595628416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1577_7_256: {
    flexGrow: 1,
    width: wp("18.4%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I9_1577_7_257: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  Text_I9_1577_7_257: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_1669: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1669_7_239: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 249, 250, 1)"
  },
  View_I9_1669_7_240: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  Text_I9_1669_7_240: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I9_1669_7_241: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1669_7_242: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.5464480874316848%")
  },
  Text_I9_1669_7_242: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1666: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.44262295081968%"),
    backgroundColor: "rgba(255, 255, 255, 0.949999988079071)"
  },
  View_I7_1666_1_6274: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267535%")
  },
  View_I7_1666_1_6275: {
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
  View_I7_1666_1_6276: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666664%"),
    top: hp("2.185792349726782%")
  },
  Text_I7_1666_1_6276: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_1666_1_6277: {
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
  ImageBackground_I7_1666_1_6278: {
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
  View_I7_1666_1_6342: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_1666_1_6342_1_1510: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_1666_1_6342_1_1511: {
    flexGrow: 1,
    width: wp("2.8444445292154947%"),
    height: hp("1.8214935813445212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111165364583343%"),
    top: hp("0.18213824496243092%")
  },
  View_I7_1666_1_6333: {
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
  View_I7_1666_1_6333_1_1380: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_1666_1_6333_1_1381: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("0.40983606557378494%")
  },
  View_7_1667: {
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
  View_I7_1667_1_1580: {
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
  View_7_2601: {
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
  View_I7_2601_1_3686: {
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
  View_I7_2601_1_3687: {
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
  View_I7_2601_1_3688: {
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
  ImageBackground_I7_2601_1_3689: {
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
  View_I7_2601_1_3690: {
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
  ImageBackground_I7_2601_1_3691: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I7_2601_1_3695: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I7_2601_1_3700: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_2601_1_3701: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666666%"),
    top: hp("0.9562841530054645%")
  },
  Text_I7_2601_1_3701: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I7_2601_1_3702: {
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
  View_I7_2601_1_3703: {
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
  View_I7_2601_1_3704: {
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
  View_I7_2601_1_3704_1_1404: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_2601_1_3704_1_1405: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.5464480874316937%")
  },
  View_I7_2601_1_3705: {
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
  ImageBackground_I7_2601_1_3706: {
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
  View_I7_2601_1_3707: {
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
  View_I7_2601_1_3708: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I7_2601_1_3708: {
    color: "rgba(33, 37, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_2601_1_3709: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.55191256830601%")
  },
  Text_I7_2601_1_3709: {
    color: "rgba(173, 181, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_2601_1_3710: {
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
  View_I7_2601_1_3710_1_1376: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_2601_1_3710_1_1377: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896167%")
  },
  View_I7_2601_1_3711: {
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
  View_I7_2601_1_3711_1_1392: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I7_2601_1_3711_1_1393: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316937%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
