<?php
            
            function horoscopeGenerator($starSign, $startMonth, $firstDay, $toMonth, $lastDay) {
                $horoscopeObject = (object) null;
                $horoscopeObject ->starSignName = $starSign;
            
                $horoscopeObject->firstMonthOfSign = $startMonth;
                $horoscopeObject->firstDayOfSign = $firstDay;
            
                $horoscopeObject->secondMonthOfSign = $toMonth;
                $horoscopeObject->lastDayOfSign = $lastDay;
              
            
                return $horoscopeObject;
 }

 $signs = array(horoscopeGenerator('Aquarius', '01', '20', '02','18'),
 horoscopeGenerator('Pisces', '02', '19', '03','20'),
 horoscopeGenerator('Aries', '03', '21', '04','19'),
 horoscopeGenerator('Taurus', '04', '20', '05','20'),
 horoscopeGenerator('Gemini', '05', '21', '06','21'),
 horoscopeGenerator('Cancer', '06', '22', '07','22'),
 horoscopeGenerator('Leo', '07', '23', '08','22'),
 horoscopeGenerator('Virgo', '08', '23', '09','22'),
 horoscopeGenerator('Libra', '09', '23', '10','22'),
 horoscopeGenerator('Scorpio', '10', '23', '11','21'), 
 horoscopeGenerator('Sagittarius', '11', '22', '12','21'),
 horoscopeGenerator('Capricorn', '12', '22', '01','19')
 );


session_start();

$newHoroscope = file_get_contents("php://input");
$year = strtok($newHoroscope, "-");
$month = strtok("-");
$day = strtok("-");

if(isset($_SERVER["REQUEST_METHOD"])){
if($_SERVER['REQUEST_METHOD'] === 'POST'){

    if(isset($_SESSION['horoscope'])) {
    $i = 0;

    foreach($signs as $sign) {
        if($month == $sign->firstMonthOfSign && $day >= $sign->firstDayOfSign) {
            
            $i = $count;
        }
        elseif($month == $sign->secondMonthOfSign && $day <= $sign->lastDayOfSign){
            $i = $count;
        }
        $count++;
    }
        
        $_SESSION['horoscope'] = $signs[$i];

        echo "true";
    }
    else{
        echo "false";
    }
}

}


?>