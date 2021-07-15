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
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_20} />
      <TouchableOpacity
        style={styles.TouchableOpacity_5_21}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <View style={styles.View_5_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8fb/3218/fb42beeedf6ec9395bb65d9f18d0cb06"
            }}
            style={styles.ImageBackground_5_23}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_56}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2cf/c00c/7ca309f11be9743a048cae2ace806f94"
          }}
          style={styles.ImageBackground_5_57}
        />
      </View>
      <View style={styles.View_5_59}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12bc/1229/c355a1a2af086a56697fdb4aa2de2032"
          }}
          style={styles.ImageBackground_5_60}
        />
      </View>
      <View style={styles.View_5_62}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58bd/b369/b53d7416647d7f61cd4126f3899f0776"
          }}
          style={styles.ImageBackground_5_63}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6524/8075/c0a0e1dec8fdc834d1a29d66e00198e8"
        }}
        style={styles.ImageBackground_5_65}
      />
      <View style={styles.View_5_68} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c6/d749/22b076f0923dd827fb8fb3c389544b9f"
        }}
        style={styles.ImageBackground_5_75}
      />
      <View style={styles.View_5_78}>
        <Text style={styles.Text_5_78}>Kérdések</Text>
      </View>
      <View style={styles.View_5_79}>
        <Text style={styles.Text_5_79}>Tudástár</Text>
      </View>
      <View style={styles.View_5_80}>
        <Text style={styles.Text_5_80}>Profilom</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d50/3775/c484fa4e37ea0824740cc731cf33239f"
        }}
        style={styles.ImageBackground_5_148}
      />
      <View style={styles.View_5_34}>
        <View style={styles.View_5_35}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/298e/0f72/157cb459be1eec2df34366c1f128e7a2"
            }}
            style={styles.ImageBackground_5_36}
          />
        </View>
        <View style={styles.View_5_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddae/2e31/0f9fab8b22937cdb4d09168de2a8a6b4"
            }}
            style={styles.ImageBackground_5_39}
          />
        </View>
        <View style={styles.View_5_41}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd0c/b094/90a9b2f0d914360341d4db5f7e014d07"
            }}
            style={styles.ImageBackground_5_42}
          />
        </View>
        <View style={styles.View_5_44}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a00/20f5/4ed96de88c29ebe70401722afac5a072"
            }}
            style={styles.ImageBackground_5_45}
          />
        </View>
        <View style={styles.View_5_47}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/e818/80c7c650590b03a2965756ef2d7826c5"
            }}
            style={styles.ImageBackground_5_48}
          />
        </View>
        <View style={styles.View_5_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/e818/80c7c650590b03a2965756ef2d7826c5"
            }}
            style={styles.ImageBackground_5_51}
          />
        </View>
        <View style={styles.View_5_53}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/e818/80c7c650590b03a2965756ef2d7826c5"
            }}
            style={styles.ImageBackground_5_54}
          />
        </View>
      </View>
      <View style={styles.View_5_157}>
        <Text style={styles.Text_5_157}>
          We&#39;ve always defined ourselves by the ability to overcome the
          impossible. And we count these moments. These moments when we dare to
          aim higher, to break barriers, to reach for the stars, to make the
          unknown known. We count these moments as our proudest achievements.
          But we lost all that. Or perhaps we&#39;ve just forgotten that we are
          still pioneers. And we&#39;ve barely begun. And that our greatest
          accomplishments cannot be behind us, because our destiny lies above
          us.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce2/832d/3422708b06312a6d1a1fc36781e6a741"
        }}
        style={styles.ImageBackground_5_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce2/832d/3422708b06312a6d1a1fc36781e6a741"
        }}
        style={styles.ImageBackground_5_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce2/832d/3422708b06312a6d1a1fc36781e6a741"
        }}
        style={styles.ImageBackground_5_162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce2/832d/3422708b06312a6d1a1fc36781e6a741"
        }}
        style={styles.ImageBackground_5_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4160/7c7d/708dac7782fbd4856a9c2446cebc240d"
        }}
        style={styles.ImageBackground_5_163}
      />
      <View style={styles.View_5_164} />
      <View style={styles.View_5_165} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe0f/5f10/5000b21e9aa4e964d1f5929150021938"
        }}
        style={styles.ImageBackground_5_166}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/dece/16c56d145c77269711ed3f27dac99bf0"
        }}
        style={styles.ImageBackground_5_169}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_5_20: {
    width: wp("103.8647342995169%"),
    minWidth: wp("103.8647342995169%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("107.92349726775956%"),
    backgroundColor: "rgba(77, 105, 127, 1)",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500
  },
  TouchableOpacity_5_21: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("6.200082184838467%"),
    minHeight: hp("6.200082184838467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.009661835748794%"),
    top: hp("109.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_22: {
    width: wp("9.525271429531816%"),
    height: hp("6.0967487064215655%"),
    top: hp("0.0516672603419579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06827386681008285%")
  },
  ImageBackground_5_23: {
    width: wp("9.525271429531816%"),
    height: hp("6.0967487064215655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_56: {
    width: wp("127.88410278910025%"),
    minWidth: wp("127.88410278910025%"),
    height: hp("64.71609313631318%"),
    minHeight: hp("64.71609313631318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.53141570897494%"),
    top: hp("-15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_57: {
    width: wp("127.74995813047252%"),
    height: hp("64.62686674191%"),
    top: hp("0.03733817345457702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08132123716787376%")
  },
  View_5_59: {
    width: wp("55.731378085371375%"),
    minWidth: wp("55.731378085371375%"),
    height: hp("31.905754798097036%"),
    minHeight: hp("31.905754798097036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.159371631393014%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_60: {
    width: wp("55.61403283750378%"),
    height: hp("31.802562025726814%"),
    top: hp("0.052607385187201317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07150253811896135%")
  },
  View_5_62: {
    width: wp("30.72337643535817%"),
    minWidth: wp("30.72337643535817%"),
    height: hp("17.649147158763448%"),
    minHeight: hp("17.649147158763448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38573629038345%"),
    top: hp("85.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_63: {
    width: wp("30.688373362960448%"),
    height: hp("17.610162203429176%"),
    top: hp("0.005584466652791775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026566510039252478%")
  },
  ImageBackground_5_65: {
    width: wp("104.58937198067633%"),
    minWidth: wp("104.58937198067633%"),
    height: hp("36.576951657488046%"),
    minHeight: hp("36.576951657488046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.83574879227053%"),
    top: hp("62.56830548979545%")
  },
  View_5_68: {
    width: wp("88.88888888888889%"),
    height: hp("88.79781420765028%"),
    top: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_5_75: {
    width: wp("8.454106280193237%"),
    height: hp("4.781430145430435%"),
    top: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.15458937198068%")
  },
  View_5_78: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("116.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_5_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_79: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748793%"),
    top: hp("116.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_5_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_80: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28985507246377%"),
    top: hp("116.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_5_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_148: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516908%"),
    top: hp("103.14207650273224%")
  },
  View_5_34: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.762541098672836%"),
    minHeight: hp("5.762541098672836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.20289855072464%"),
    top: hp("106.01092896174865%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_35: {
    width: wp("2.899175911133992%"),
    height: hp("1.9210283873511143%"),
    top: hp("1.632502821625252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.703698789439912%")
  },
  ImageBackground_5_36: {
    width: wp("2.899175911133992%"),
    height: hp("1.9210283873511143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_38: {
    width: wp("8.373593132277042%"),
    height: hp("0.5762530154869204%"),
    top: hp("4.321906084571367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441272975166044%")
  },
  ImageBackground_5_39: {
    width: wp("8.373593132277042%"),
    height: hp("0.5762530154869204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_41: {
    width: wp("5.152979219593288%"),
    height: hp("3.0733551483988113%"),
    top: hp("1.0564668582436667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2544234271210684%")
  },
  ImageBackground_5_42: {
    width: wp("5.152979219593288%"),
    height: hp("3.0733551483988113%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_44: {
    width: wp("9.66183574879227%"),
    height: hp("4.802119145627882%"),
    top: hp("0.48020993425545555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_45: {
    width: wp("9.66183574879227%"),
    height: hp("4.802119145627882%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_47: {
    width: wp("0.3220614027861812%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441272975166044%")
  },
  ImageBackground_5_48: {
    width: wp("0.3220614027861812%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_50: {
    width: wp("0.3220619210874401%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2882398522418441%")
  },
  ImageBackground_5_51: {
    width: wp("0.3220619210874401%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_53: {
    width: wp("0.32206088448492226%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%")
  },
  ImageBackground_5_54: {
    width: wp("0.32206088448492226%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_157: {
    width: wp("79.71014492753623%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    justifyContent: "flex-start"
  },
  Text_5_157: {
    color: "rgba(104, 104, 104, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_159: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.43961352657005%"),
    top: hp("92.62295081967213%")
  },
  ImageBackground_5_161: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.7536231884058%"),
    top: hp("92.62295081967213%")
  },
  ImageBackground_5_162: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.3816425120773%"),
    top: hp("92.62295081967213%")
  },
  ImageBackground_5_160: {
    width: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    top: hp("92.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.69565217391305%")
  },
  ImageBackground_5_163: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.06763285024155%"),
    top: hp("92.62295081967213%")
  },
  View_5_164: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231885%"),
    top: hp("88.79781420765028%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_5_165: {
    width: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    top: hp("88.79781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545893%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_5_166: {
    width: wp("8.454106280193237%"),
    height: hp("4.781420765027322%"),
    top: hp("90.1639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%")
  },
  ImageBackground_5_169: {
    width: wp("8.454106280193237%"),
    height: hp("4.781420765027322%"),
    top: hp("90.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
