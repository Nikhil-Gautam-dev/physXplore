import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import Snackbar from 'react-native-snackbar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { authStackparamList } from '../stack/Auth'
import { color } from '../style/colors'

type loginProps = NativeStackScreenProps<authStackparamList, 'Login'>

const validateInputFields = (username: string, password: string) => {


    if (!username) {
        return { validation: false, isEmail: false, errorMessage: "Email or username can't be empty" }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmail = emailRegex.test(username)

    if (!password) {
        return { validation: false, isEmail, errorMessage: "password can't be empty" }
    }

    if (password.length < 6) {
        return { validation: false, isEmail, errorMessage: "password must be greater than 6 character" }

    }

    return { validation: true, isEmail, errorMessage: "" }

}



const Login = ({ navigation }: loginProps | any) => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [validationError, setValidationError] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)

    // const dispatch = useDispatch()

    const showSnackBar = (message: string, textColor = "#FFFFFF") => {
        return Snackbar.show(
            {
                text: message,
                duration: Snackbar.LENGTH_INDEFINITE,
                textColor,
                action: {
                    text: "OK",
                    textColor: "black",
                    onPress: () => {
                        Snackbar.dismiss()
                        setValidationError(false)
                        setLoader(false)
                    }
                }
            }
        )
    }


    const handleLogin = async () => {
        setLoader(true)
        setValidationError(true)
        const { validation, isEmail, errorMessage } = validateInputFields(username, password)
        if (!validation) {
            showSnackBar(errorMessage)
            return
        }

        if (isEmail) {
            showSnackBar("Sorry Email service is not available please consider using username !")
            return
        }

        // try {

        //     const response = await apiClient.post(loginApiUrl, {
        //         username: username,
        //         password: password
        //     })

        //     if (response.status == 200) {
        //         const responseData = response.data
        //         await saveUserInfo(responseData.data.accessToken, { refreshToken: responseData.data?.refreshToken, ...responseData.data?.user })

        //         dispatch(login(responseData.data.accessToken))
        //     }

        // } catch (error: { status: any; message: string } | any) {
        //     showSnackBar(error.message || error, 'red')
        // }
    }

    return (
        <>
            <View style={[styles.mainContainer]}>
                <Text style={[styles.textColor, styles.signInText]}>Sign in</Text>
                <View style={styles.outerFormContainer}>
                    <Text style={[styles.textColor, styles.welcomeText]}>
                        Welcome Back
                    </Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            placeholder='username or email'
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            style={styles.textInput}
                            editable={!validationError}
                            onChangeText={(username) => setUsername(username.trim())}
                        />
                        <TextInput
                            placeholder='Password'
                            textContentType='password'
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            secureTextEntry={hidePassword}
                            editable={!validationError}
                            right={
                                <TextInput.Icon
                                    icon={hidePassword ? 'eye-off' : 'eye'}
                                    onPress={() => { setHidePassword(!hidePassword) }}
                                />
                            }
                            style={styles.textInput}
                            onChangeText={(password => setPassword(password.trim()))}
                        />

                        <TouchableOpacity
                            key={'forgotBtn'}
                        >
                            <Text style={[styles.textColor, styles.textBold, styles.forgotBtnText]}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={'loginBtn'}
                            disabled={validationError}
                            style={styles.loginBtn}
                            onPress={handleLogin}>
                            {loader ?
                                <ActivityIndicator
                                    color='#FFFFFF'
                                />
                                : <Text style={styles.loginBtnText}>Log in</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={'newUserSignupBtn'}
                            style={styles.newUserSignUpBtn}
                            onPress={() => {
                                navigation.navigate("Signup")
                            }}
                        >
                            <Text style={[styles.textColor, styles.newUserSignUpBtnText]}>New user? Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: color.backgroundColor,
        alignItems: 'center',
        paddingTop: 20,
        gap: 20,
        flex: 1,
    },

    textColor: {
        color: color.textColor
    },

    textBold: {
        fontWeight: '600'
    },

    signInText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    outerFormContainer: {
        flex: 1,
        gap: 20,
        width: "100%",
        alignItems: 'center',
    },
    formContainer: {
        gap: 20,
        width: "100%",
        paddingHorizontal: 20
    },
    textInput: {
        borderRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: color.inputBackgroundColor,

    },
    loginBtn: {
        width: '100%',
        backgroundColor: color.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 50
    },
    loginBtnText: {
        color: color.inputBackgroundColor,
        fontSize: 18,
        fontWeight: 'bold'
    },
    newUserSignUpBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    newUserSignUpBtnText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    forgotBtnText: {
        fontWeight: '500',
        fontSize: 14
    }

})