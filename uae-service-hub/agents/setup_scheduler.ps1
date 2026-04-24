# ================================================
# Windows Task Scheduler Setup Script
# PowerShell se chalao: Run as Administrator
# ================================================

$TaskName    = "AlHaya-DailyContentAgent"
$Description = "Al Haya Cleaning - Daily AI content update at 8 AM"
$ScriptPath  = "E:\servdubai-website\uae-service-hub\agents\run_daily.bat"

# Purana task delete karo agar ho
Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue

# Naya task create karo
$Action  = New-ScheduledTaskAction -Execute "cmd.exe" -Argument "/c `"$ScriptPath`""
$Trigger = New-ScheduledTaskTrigger -Daily -At "08:00AM"
$Settings = New-ScheduledTaskSettingsSet -RunOnlyIfNetworkAvailable -WakeToRun

Register-ScheduledTask `
  -TaskName    $TaskName `
  -Description $Description `
  -Action      $Action `
  -Trigger     $Trigger `
  -Settings    $Settings `
  -RunLevel    Highest

Write-Host "✅ Task Scheduler setup complete!" -ForegroundColor Green
Write-Host "   Task: $TaskName" -ForegroundColor Cyan
Write-Host "   Runs: Every day at 8:00 AM" -ForegroundColor Cyan
Write-Host "   Script: $ScriptPath" -ForegroundColor Cyan
