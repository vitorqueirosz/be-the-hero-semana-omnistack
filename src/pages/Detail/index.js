import React from 'react'
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import {Feather} from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'

import * as MailComposer from 'expo-mail-composer'

import {useNavigation} from '@react-navigation/native'

import styles from './styles'

export default function Detail(){
    const navigator = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada", com o valor de R$ 120,00'

    function navigateBack(){
        navigator.goBack()
    }

    function sendMail(){
            MailComposer.composeAsync({
                subject: 'Heroi do caso: Cadelinha atropelada',
                recipients: ['vitor.queiroz16@hotmail.com'],
                body: message,
            })
    }
    function sendWhatsApp(){
            Linking.openURL(`whatsapp://send?phone=557191813915&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#E82041"/>
            </TouchableOpacity>
            </View>

            <View style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD:</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cachorro maltratado</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>RS$ 120,00</Text>
            </View>

        <View style={styles.contactBox}>
        
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato.</Text>
        <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>

        </View>
        </View>
        </View>
    )
}