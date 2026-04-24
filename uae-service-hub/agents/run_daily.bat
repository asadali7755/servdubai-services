@echo off
:: ================================================
:: Al Haya - Daily AI Content Agent
:: Roz subah 8 AM pe ise Windows Task Scheduler
:: chalata hai automatically
:: ================================================

echo [%date% %time%] Starting Al Haya Daily Content Agent...

:: Project directory
cd /d "E:\servdubai-website\uae-service-hub\agents"

:: Python environment activate (agar virtual env ho)
:: Uncomment karo agar venv use kar rahe ho:
:: call ..\venv\Scripts\activate.bat

:: Run the agent
python run_agents.py

:: Log result
echo [%date% %time%] Agent completed. >> agent_log.txt

echo Done! Website content updated.
pause
