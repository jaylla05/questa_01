import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const num = (t) => (t.trim() === '' ? NaN : Number(t.replace(',', '.')));

export default function App() {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  const calcular = () => {
    setResultado('');
    if (peso.trim() === '') return setErro('Informe o peso.');
    const p = num(peso);
    if (isNaN(p)) return setErro('Digite um número válido.');
    if (p <= 0) return setErro('O peso deve ser maior que zero.');
    setErro('');
    const litros = (p * 35) / 1000;
    setResultado(litros.toFixed(2).replace('.', ',') + ' litros por dia');
  };

  return (
    <View style={s.c}>
      <Text style={s.t}>💧 Consumo diário de água</Text>
      <TextInput style={s.i} placeholder="Peso (kg)" keyboardType="numeric" value={peso} onChangeText={setPeso} />
      <Pressable style={s.b} onPress={calcular}><Text style={s.bt}>Calcular</Text></Pressable>
      {erro !== '' && <Text style={s.e}>{erro}</Text>}
      {resultado !== '' && <Text style={s.r}>Estimativa: {resultado}</Text>}
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, padding: 24, paddingTop: 60, backgroundColor: '#f4f6fb' },
  t: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#1f2a44' },
  i: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccd', borderRadius: 8, padding: 12, marginBottom: 12, fontSize: 16 },
  b: { backgroundColor: '#3b6cf6', padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 8 },
  bt: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  r: { fontSize: 20, marginTop: 12, color: '#1f2a44', fontWeight: '600' },
  e: { color: '#c0392b', marginTop: 8 },
});