import { Entypo } from '@expo/vector-icons';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Francais' }
];
const Selector = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;

    const setLanguage = code => {
        return i18n.changeLanguage(code);
    };
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>
                    {t('common:languageSelector')}

                </Text>
                <Entypo name="language" size={24} color="black" />
            </View>
            {
                LANGUAGES.map((language) => {
                    const selectedLanguage = language.code === selectedLanguageCode;
                    return (
                        <Pressable
                            key={language.code}
                            style={styles.buttonContainer}
                            disabled={selectedLanguageCode}
                            onPress={() => setLanguage(language.code)}
                        >
                            <Text style={[selectedLanguage ? styles.selectedText : styles.text]}>
                                {language.label}
                            </Text>
                        </Pressable>
                    )
                })
            }
        </View>
    )

};
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#444',
        fontSize: 28,
        fontWeight: '600'
    },
    buttonContainer: {
        marginTop: 10
    },
    text: {
        fontSize: 18,
        color: '#000',
        paddingVertical: 4
    },
    selectedText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'tomato',
        paddingVertical: 4
    }
});