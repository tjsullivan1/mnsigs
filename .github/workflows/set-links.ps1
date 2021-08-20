$ctx = New-AzStorageContext -StorageAccountName samnsigs001 -UseConnectedAccount

Get-AzStorageBlob -Context $ctx -Container members-content | % { 
    $name = $_.name
    $sas = New-AzStorageBlobSASToken -Blob $name -Permission r -Container members-content -context $ctx -FullUri
    $string = "<a href='$sas'>$name</a><br />`n"; Add-Content -Value $string -Path tmp.txt 
}

$content = gc .\src\pages\members\minutes.js
$new = gc .\tmp.txt

$new_minutes_js = $content -replace '###LINK_INSERTS###', $new

$new_minutes_js | out-file -FilePath ".\src\pages\members\minutes.js"