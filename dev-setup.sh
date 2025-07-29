#!/bin/bash

# Script de desenvolvimento para Neltec Entulhos
echo "🚛 Neltec Entulhos - Setup de Desenvolvimento"
echo "============================================="

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install --legacy-peer-deps
fi

# Verificar se o arquivo db.json existe
if [ ! -f "data/db.json" ]; then
    echo "⚠️  Arquivo data/db.json não encontrado!"
    echo "Certifique-se de que o arquivo existe antes de continuar."
    exit 1
fi

echo "✅ Configuração concluída!"
echo ""
echo "🌐 Iniciando servidores..."
echo "   - Frontend: http://localhost:3002"
echo "   - API: http://localhost:3001"
echo ""
echo "🔑 Credenciais de teste:"
echo "   - Admin: admin@neltec.com / admin123"
echo "   - Operador: operador@neltec.com / op123"
echo ""
echo "Para parar os servidores, pressione Ctrl+C"
echo ""

# Iniciar os servidores
npm run dev:full
