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
      <View style={styles.View_2_3} />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_31}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("5_19"))
        }
      >
        <View style={styles.View_2_32}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dcb/8d0c/291b16632296b657ce25318ac7190195"
            }}
            style={styles.ImageBackground_2_33}
          />
        </View>
        <View style={styles.View_2_35}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7645/7852/79bce77fffcb01e845da4bddc2905dce"
            }}
            style={styles.ImageBackground_2_36}
          />
        </View>
        <View style={styles.View_2_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cef/28a6/5e3a5c90f541a05c489b25260e2c930d"
            }}
            style={styles.ImageBackground_2_39}
          />
        </View>
        <View style={styles.View_2_41}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e1/1619/4091b54d8735f4235186a55ceceac6ee"
            }}
            style={styles.ImageBackground_2_42}
          />
        </View>
        <View style={styles.View_2_44}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
            }}
            style={styles.ImageBackground_2_45}
          />
        </View>
        <View style={styles.View_2_47}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
            }}
            style={styles.ImageBackground_2_48}
          />
        </View>
        <View style={styles.View_2_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
            }}
            style={styles.ImageBackground_2_51}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_76}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2cf/c00c/7ca309f11be9743a048cae2ace806f94"
          }}
          style={styles.ImageBackground_2_77}
        />
      </View>
      <View style={styles.View_2_82}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12bc/1229/c355a1a2af086a56697fdb4aa2de2032"
          }}
          style={styles.ImageBackground_2_83}
        />
      </View>
      <View style={styles.View_2_79}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58bd/b369/b53d7416647d7f61cd4126f3899f0776"
          }}
          style={styles.ImageBackground_2_80}
        />
      </View>
      <View style={styles.View_5_171} />
      <View style={styles.View_4_76} />
      <View style={styles.View_4_77}>
        <Text style={styles.Text_4_77}>ROAS</Text>
      </View>
      <View style={styles.View_5_6} />
      <View style={styles.View_5_7}>
        <Text style={styles.Text_5_7}>CTR</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_2}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("5_274"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_20_69}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("5_274"))
        }
      />
      <View style={styles.View_5_3}>
        <Text style={styles.Text_5_3}>CPC</Text>
      </View>
      <View style={styles.View_5_4} />
      <View style={styles.View_5_5}>
        <Text style={styles.Text_5_5}>ROI</Text>
      </View>
      <View style={styles.View_5_10}>
        <Text style={styles.Text_5_10}>
          Mely betűszó jelöli egy kattintás árát?
        </Text>
      </View>
      <View style={styles.View_5_156}>
        <View style={styles.View_5_155}>
          <Text style={styles.Text_5_155}>12.342</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a32/c050/99917ea17e37b62e9d9b26f03a5875b1"
          }}
          style={styles.ImageBackground_5_154}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c6/d749/22b076f0923dd827fb8fb3c389544b9f"
        }}
        style={styles.ImageBackground_5_13}
      />
      <View style={styles.View_5_16}>
        <Text style={styles.Text_5_16}>Kérdések</Text>
      </View>
      <View style={styles.View_5_17}>
        <Text style={styles.Text_5_17}>Tudástár</Text>
      </View>
      <View style={styles.View_5_18}>
        <Text style={styles.Text_5_18}>Profilom</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d50/3775/c484fa4e37ea0824740cc731cf33239f"
        }}
        style={styles.ImageBackground_5_81}
      />
      <View style={styles.View_2_5}>
        <View style={styles.View_2_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4413/6ba5/c391d7854482c75267c653972bc422d4"
            }}
            style={styles.ImageBackground_2_7}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_3: {
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
  TouchableOpacity_2_31: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.762541098672836%"),
    minHeight: hp("5.762541098672836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("110.38251366120218%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_32: {
    width: wp("2.899175911133992%"),
    height: hp("1.9210283873511143%"),
    top: hp("1.632502821625252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.703703857274448%")
  },
  ImageBackground_2_33: {
    width: wp("2.899175911133992%"),
    height: hp("1.9210283873511143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_35: {
    width: wp("8.373593132277042%"),
    height: hp("0.5762530154869204%"),
    top: hp("4.321906084571381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441222296820754%")
  },
  ImageBackground_2_36: {
    width: wp("8.373593132277042%"),
    height: hp("0.5762530154869204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_38: {
    width: wp("5.152979219593288%"),
    height: hp("3.0733551483988113%"),
    top: hp("1.0564668582436951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2544284949556115%")
  },
  ImageBackground_2_39: {
    width: wp("5.152979219593288%"),
    height: hp("3.0733551483988113%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_41: {
    width: wp("9.66183574879227%"),
    height: hp("4.802119145627882%"),
    top: hp("0.48020993425546976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_42: {
    width: wp("9.66183574879227%"),
    height: hp("4.802119145627882%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_44: {
    width: wp("0.3220614027861812%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441222296820754%")
  },
  ImageBackground_2_45: {
    width: wp("0.3220614027861812%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_47: {
    width: wp("0.3220619210874401%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2882444593641438%")
  },
  ImageBackground_2_48: {
    width: wp("0.3220619210874401%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_50: {
    width: wp("0.32206088448492226%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584556%")
  },
  ImageBackground_2_51: {
    width: wp("0.32206088448492226%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_76: {
    width: wp("127.88410278910025%"),
    minWidth: wp("127.88410278910025%"),
    height: hp("64.71609313631318%"),
    minHeight: hp("64.71609313631318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.531400966183575%"),
    top: hp("-15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_77: {
    width: wp("127.74995813047252%"),
    height: hp("64.62686674191%"),
    top: hp("0.03733817345457702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08131386577219502%")
  },
  View_2_82: {
    width: wp("55.731378085371375%"),
    minWidth: wp("55.731378085371375%"),
    height: hp("31.905754798097036%"),
    minHeight: hp("31.905754798097036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95652173913043%"),
    top: hp("32.37704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_83: {
    width: wp("55.61403283750378%"),
    height: hp("31.802562025726814%"),
    top: hp("0.05260738518719421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07150622381680449%")
  },
  View_2_79: {
    width: wp("30.72337643535817%"),
    minWidth: wp("30.72337643535817%"),
    height: hp("17.649147158763448%"),
    minHeight: hp("17.649147158763448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38574274035467%"),
    top: hp("85.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_80: {
    width: wp("30.688373362960448%"),
    height: hp("17.610162203429176%"),
    top: hp("0.005584466652791775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026561902916959923%")
  },
  View_5_171: {
    width: wp("58.69061013926631%"),
    minWidth: wp("58.69061013926631%"),
    height: hp("32.32748521481707%"),
    minHeight: hp("32.32748521481707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396135%"),
    top: hp("59.01639344262295%"),
    backgroundColor: "rgba(195, 224, 225, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_4_76: {
    width: wp("66.90821256038647%"),
    height: hp("10.382513661202186%"),
    top: hp("68.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.217391304347828%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_4_77: {
    width: wp("51.690821256038646%"),
    top: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.33816425120773%"),
    justifyContent: "flex-start"
  },
  Text_4_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_6: {
    width: wp("66.90821256038647%"),
    height: hp("10.382513661202186%"),
    top: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_5_7: {
    width: wp("51.690821256038646%"),
    top: hp("85.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%"),
    justifyContent: "flex-start"
  },
  Text_5_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_5_2: {
    width: wp("66.90821256038647%"),
    height: hp("10.382513661202186%"),
    top: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_20_69: {
    width: wp("66.90821256038647%"),
    height: hp("10.382513661202186%"),
    top: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_5_3: {
    width: wp("51.690821256038646%"),
    top: hp("42.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    justifyContent: "flex-start"
  },
  Text_5_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_4: {
    width: wp("66.90821256038647%"),
    height: hp("10.382513661202186%"),
    top: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_5_5: {
    width: wp("51.690821256038646%"),
    top: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.23671497584541%"),
    justifyContent: "flex-start"
  },
  Text_5_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_10: {
    width: wp("73.42995169082126%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    justifyContent: "flex-start"
  },
  Text_5_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_156: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.02415458937198%"),
    top: hp("8.19672131147541%")
  },
  View_5_155: {
    width: wp("18.115942028985508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_155: {
    color: "rgba(254, 168, 50, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_154: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0.27322404371584774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.806763285024154%"),
    resizeMode: "cover"
  },
  ImageBackground_5_13: {
    width: wp("8.454106280193237%"),
    height: hp("4.781430145430435%"),
    top: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.15458937198068%")
  },
  View_5_16: {
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
  Text_5_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_17: {
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
  Text_5_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_18: {
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
  Text_5_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_81: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("103.14207650273224%")
  },
  View_2_5: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("6.200082184838467%"),
    minHeight: hp("6.200082184838467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.251207729468598%"),
    top: hp("105.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_6: {
    width: wp("9.525271429531816%"),
    height: hp("6.0967487064215655%"),
    top: hp("0.0516672603419579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0682664954144041%")
  },
  ImageBackground_2_7: {
    width: wp("9.525271429531816%"),
    height: hp("6.0967487064215655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
