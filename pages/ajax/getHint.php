<?php
  $a[]="Anna";
  $a[]="Bob";
  $a[]="Carl";
  $a[]="Dorthy";
  $a[]="Emma";
  $a[]="Frank";
  $a[]="Gary";
  $a[]="Helga";
  $a[]="Ivan";
  $a[]="Jacky";
  $a[]="Karen";
  $a[]="Larry";
  $a[]="Michelle";
  $a[]="Nick";
  $a[]="Orlando";
  $a[]="Peter";
  $a[]="Quagmire";
  $a[]="Rose";
  $a[]="Sam";
  $a[]="Tonya";
  $a[]="Una";
  $a[]="Vicky";
  $a[]="Will";
  $a[]="Xavier";
  $a[]="Yanni";
  $a[]="Zack";
  // get the q parameter from URL
  $q=$_REQUEST["q"]; $hint="";

  // look up all the hints from array if $q is different from ""
  if ($q !== "")
  { $q=strtolower($q); $len=strlen($q);
    foreach($a as $name)
    { if (stristr($q, substr($name,0,$len)))
      { if ($hint==="")
        { $hint=$name; }
        else
        { $hint .=", $name"; }
      }
    }
  }
// Output "no suggestion" if no hint were found
// or output the correct values
echo $hint==="" ? "no suggestion" : $hint;
?>