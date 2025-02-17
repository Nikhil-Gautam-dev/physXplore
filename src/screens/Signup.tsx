import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { authStackparamList } from '../stack/Auth'
import Snackbar from 'react-native-snackbar'
import { color } from '../style/colors'



type signupProps = NativeStackScreenProps<authStackparamList, "Signup">

const validateInputFields = (username: string, password: string, confirmPassword: string, email: string) => {

    if (!username.trim()) {
        return { validation: false, errorMessage: "username can't be empty!" }
    }

    if (!password.trim()) {
        return { validation: false, errorMessage: "password can't be empty!" }
    }

    if (password.length < 6) {
        return { validation: false, errorMessage: "password can't be smaller than 6 characters!" }
    }

    if (!confirmPassword.trim()) {
        return { validation: false, errorMessage: "confirm password can't be empty!" }
    }

    if (confirmPassword != password) {
        return { validation: false, errorMessage: "password doesn't match" }
    }

    return { validation: true, errorMessage: "" }

}

const Signup = ({ navigation }: signupProps | any) => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [validationError, setValidationError] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)

    // const dispatch = useDispatch()

    const showSnackBar = (message: string, textColor = "#FFFFFF") => {
        setLoader(false)
        return Snackbar.show(
            {
                text: message,
                duration: Snackbar.LENGTH_INDEFINITE,
                textColor,
                action: {
                    text: "OK",
                    textColor,
                    onPress: () => {
                        Snackbar.dismiss()
                        setValidationError(false)
                        // setLoader(false)
                    }
                }
            }
        )
    }

    const handleSignup = async () => {
        setLoader(true)
        setValidationError(true)

        const { validation, errorMessage } = validateInputFields(username, password, confirmPassword, email);

        if (!validation) {
            showSnackBar(errorMessage)
            return
        }

        // try {

        //     const registerUserResponse = await apiClient.post(registerUserUrl, {
        //         username,
        //         password
        //     })

        //     console.log(registerUserResponse)

        //     if (registerUserResponse.status == 200) {
        //         const response = await apiClient.post(loginApiUrl, { username, password })

        //         if (response.status == 200) {
        //             const responseData = response.data
        //             await saveUserInfo(responseData.data.accessToken, { refreshToken: responseData.data?.refreshToken, ...responseData.data?.user })

        //             dispatch(login(responseData.data.accessToken))
        //         }
        //     }



        // } catch (error: { status: any; message: string } | any) {
        //     console.log(error)
        //     showSnackBar(error.message || error, 'red')
        // }

        // finally {
        //     setLoader(false)
        //     setValidationError(false)
        // }

    }


    return (
        <>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <Text style={[styles.textColor, styles.signInText]}>Sign Up</Text>
                <View style={styles.outerFormContainer}>
                    <Text style={[styles.textColor, styles.welcomeText]}>
                        Welcome To physXplore
                    </Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            placeholder='Username'
                            textContentType='username'
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            style={styles.textInput}
                            editable={!validationError}
                            onChangeText={(username) => setUsername(username.trim())}
                            enablesReturnKeyAutomatically
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
                            onChangeText={(password) => setPassword(password.trim())}
                        />
                        <TextInput
                            placeholder='Confirm Password'
                            textContentType='password'
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            editable={!validationError}
                            style={styles.textInput}
                            onChangeText={(confirmPassword => setConfirmPassword(confirmPassword.trim()))}
                        />
                        <TextInput
                            placeholder='email (optional)'
                            textContentType='emailAddress'
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            style={styles.textInput}
                            editable={!validationError}
                            onChangeText={(email) => setEmail(email.trim())}
                            right={
                                <Text>optional</Text>
                            }
                        />

                        <TouchableOpacity
                            key={'signupBtn'}
                            disabled={validationError}
                            style={styles.signupBtn}
                            onPress={handleSignup}>
                            {!loader ? <Text style={styles.signupBtnText}>Signup</Text> : <ActivityIndicator color='white' />}
                        </TouchableOpacity>
                        <TouchableOpacity
                            key={'alreadyUserLoginBtn'}
                            style={styles.alreadyUserLoginBtn}
                            onPress={() => {
                                navigation.navigate("Login")
                            }}
                        >
                            <Text style={[styles.textColor, styles.alreadyUserLoginBtnText]}>Already a user?</Text>
                            <Text style={[styles.textColor, styles.alreadyUserLoginBtnText, styles.toLoginBtnText]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Signup

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20,
        gap: 20,
        height: "100%"
        // flex: 1,
    },
    textColor: {
        color: color.textColor
    },
    signInText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.textColor
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
    signupBtn: {
        width: '100%',
        backgroundColor: color.primaryColor,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 50
    },
    signupBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold'
    },
    alreadyUserLoginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    alreadyUserLoginBtnText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    toLoginBtnText: {
        color: color.primaryColor
    }
})