@echo off
REM Script de desenvolvimento para Neltec Entulhos
echo 🚛 Neltec Entulhos - Setup de Desenvolvimento
echo =============================================

REM Verificar se as dependências estão instaladas
if not exist "node_modules" (
    echo 📦 Instalando dependências...
    npm install --legacy-peer-deps
)

REM Verificar se o arquivo db.json existe
if not exist "data\db.json" (
    echo ⚠️  Arquivo data\db.json não encontrado!
    echo Certifique-se de que o arquivo existe antes de continuar.
    pause
    exit /b 1
)

echo ✅ Configuração concluída!
echo.
echo 🌐 Iniciando servidores...
echo    - Frontend: http://localhost:3002
echo    - API: http://localhost:3001
echo.
echo 🔑 Credenciais de teste:
echo    - Admin: admin@neltec.com / admin123
echo    - Operador: operador@neltec.com / op123
echo.
echo Para parar os servidores, pressione Ctrl+C
echo.

REM Iniciar os servidores
npm run dev:full
