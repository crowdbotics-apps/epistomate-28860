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
      <View style={styles.View_5_275} />
      <TouchableOpacity
        style={styles.TouchableOpacity_5_276}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("5_19"))
        }
      >
        <View style={styles.View_5_277}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dcb/8d0c/291b16632296b657ce25318ac7190195"
            }}
            style={styles.ImageBackground_5_278}
          />
        </View>
        <View style={styles.View_5_280}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7645/7852/79bce77fffcb01e845da4bddc2905dce"
            }}
            style={styles.ImageBackground_5_281}
          />
        </View>
        <View style={styles.View_5_283}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cef/28a6/5e3a5c90f541a05c489b25260e2c930d"
            }}
            style={styles.ImageBackground_5_284}
          />
        </View>
        <View style={styles.View_5_286}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e1/1619/4091b54d8735f4235186a55ceceac6ee"
            }}
            style={styles.ImageBackground_5_287}
          />
        </View>
        <View style={styles.View_5_289}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
            }}
            style={styles.ImageBackground_5_290}
          />
        </View>
        <View style={styles.View_5_292}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
            }}
            style={styles.ImageBackground_5_293}
          />
        </View>
        <View style={styles.View_5_295}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
            }}
            style={styles.ImageBackground_5_296}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_298}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2cf/c00c/7ca309f11be9743a048cae2ace806f94"
          }}
          style={styles.ImageBackground_5_299}
        />
      </View>
      <View style={styles.View_5_317}>
        <Text style={styles.Text_5_317}>
          Mely betűszó jelöli egy kattintás árát?
        </Text>
      </View>
      <View style={styles.View_5_318}>
        <View style={styles.View_5_319}>
          <Text style={styles.Text_5_319}>12.429</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a32/c050/99917ea17e37b62e9d9b26f03a5875b1"
          }}
          style={styles.ImageBackground_5_320}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c6/d749/22b076f0923dd827fb8fb3c389544b9f"
        }}
        style={styles.ImageBackground_5_321}
      />
      <View style={styles.View_5_324}>
        <Text style={styles.Text_5_324}>Kérdések</Text>
      </View>
      <View style={styles.View_5_325}>
        <Text style={styles.Text_5_325}>Tudástár</Text>
      </View>
      <View style={styles.View_5_326}>
        <Text style={styles.Text_5_326}>Profilom</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3640/a47e/224f615dce37fa85cc9629f7d4b1923a"
        }}
        style={styles.ImageBackground_20_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d50/3775/c484fa4e37ea0824740cc731cf33239f"
        }}
        style={styles.ImageBackground_5_327}
      />
      <View style={styles.View_5_328}>
        <View style={styles.View_5_329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4413/6ba5/c391d7854482c75267c653972bc422d4"
            }}
            style={styles.ImageBackground_5_330}
          />
        </View>
      </View>
      <View style={styles.View_20_70} />
      <View style={styles.View_20_71}>
        <Text style={styles.Text_20_71}>Helyes válasz!</Text>
      </View>
      <View style={styles.View_20_72}>
        <Text style={styles.Text_20_72}>35 új EpistoCoint szereztél</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_5_275: {
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
  TouchableOpacity_5_276: {
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
  View_5_277: {
    width: wp("2.899175911133992%"),
    height: hp("1.9210283873511143%"),
    top: hp("1.632502821625252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.703706160835594%")
  },
  ImageBackground_5_278: {
    width: wp("2.899175911133992%"),
    height: hp("1.9210283873511143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_280: {
    width: wp("8.373593132277042%"),
    height: hp("0.5762530154869204%"),
    top: hp("4.321906084571381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441199261209221%")
  },
  ImageBackground_5_281: {
    width: wp("8.373593132277042%"),
    height: hp("0.5762530154869204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_283: {
    width: wp("5.152979219593288%"),
    height: hp("3.0733551483988113%"),
    top: hp("1.0564668582436951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2544307985167578%")
  },
  ImageBackground_5_284: {
    width: wp("5.152979219593288%"),
    height: hp("3.0733551483988113%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_286: {
    width: wp("9.66183574879227%"),
    height: hp("4.802119145627882%"),
    top: hp("0.48020993425546976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_287: {
    width: wp("9.66183574879227%"),
    height: hp("4.802119145627882%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_289: {
    width: wp("0.3220614027861812%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441199261209221%")
  },
  ImageBackground_5_290: {
    width: wp("0.3220614027861812%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_292: {
    width: wp("0.3220619210874401%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2882472236375264%")
  },
  ImageBackground_5_293: {
    width: wp("0.3220619210874401%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_295: {
    width: wp("0.32206088448492226%"),
    height: hp("0.1920848596291464%"),
    top: hp("0.8643812169142677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584556%")
  },
  ImageBackground_5_296: {
    width: wp("0.32206088448492226%"),
    height: hp("0.1920848596291464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_298: {
    width: wp("127.88410278910025%"),
    minWidth: wp("127.88410278910025%"),
    height: hp("64.71609313631318%"),
    minHeight: hp("64.71609313631318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.531408337579258%"),
    top: hp("-15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_299: {
    width: wp("127.74995813047252%"),
    height: hp("64.62686674191%"),
    top: hp("0.03733817345457702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08131386577219146%")
  },
  View_5_317: {
    width: wp("73.42995169082126%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    justifyContent: "flex-start"
  },
  Text_5_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_318: {
    width: wp("28.985507246376812%"),
    minWidth: wp("28.985507246376812%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("8.19672131147541%")
  },
  View_5_319: {
    width: wp("20.048309178743963%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_319: {
    color: "rgba(254, 168, 50, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_320: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0.27322404371584774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%"),
    resizeMode: "cover"
  },
  ImageBackground_5_321: {
    width: wp("8.454106280193237%"),
    height: hp("4.781430145430435%"),
    top: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.15458937198068%")
  },
  View_5_324: {
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
  Text_5_324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_325: {
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
  Text_5_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_326: {
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
  Text_5_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_20_67: {
    width: wp("72.46376811594203%"),
    minWidth: wp("72.46376811594203%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.217391304347828%"),
    top: hp("66.93989071038251%"),
    resizeMode: "cover"
  },
  ImageBackground_5_327: {
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
  View_5_328: {
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
  View_5_329: {
    width: wp("9.525271429531816%"),
    height: hp("6.0967487064215655%"),
    top: hp("0.0516672603419579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0682664954144041%")
  },
  ImageBackground_5_330: {
    width: wp("9.525271429531816%"),
    height: hp("6.0967487064215655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_20_70: {
    width: wp("66.90821256038647%"),
    height: hp("10.382513661202186%"),
    top: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    backgroundColor: "rgba(195, 224, 225, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_20_71: {
    width: wp("48.309178743961354%"),
    top: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019323%"),
    justifyContent: "flex-start"
  },
  Text_20_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_72: {
    width: wp("71.98067632850241%"),
    minWidth: wp("71.98067632850241%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("55.60109289617486%"),
    justifyContent: "flex-start"
  },
  Text_20_72: {
    color: "rgba(104, 104, 104, 1)",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
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
