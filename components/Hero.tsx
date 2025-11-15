import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';
import Magnet from './Magnet';
import { IconArrowRight } from './Icons';
import VariableProximity from './VariableProximity';


const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative overflow-hidden bg-[#F7F5F2]">
            <div className="absolute inset-0 text-[#EAE6DF] opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2546 2546" fill="none" preserveAspectRatio="xMidYMid slice">
                    <g>
                        <path d="M1836.89 1371.04L1373.41 1834.52C1191 2016.93 895.256 2016.93 712.847 1834.52L712.84 1834.51C530.432 1652.11 530.432 1356.36 712.84 1173.95L1176.32 710.47C1358.73 528.061 1654.48 528.061 1836.88 710.47L1836.89 710.477C2019.3 892.885 2019.3 1188.63 1836.89 1371.04Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1788.86 1390.84L1345.18 1834.52C1170.57 2009.14 887.461 2009.14 712.846 1834.52L712.839 1834.51C538.224 1659.9 538.224 1376.79 712.839 1202.18L1156.52 758.5C1331.13 583.885 1614.24 583.885 1788.85 758.5L1788.86 758.507C1963.47 933.122 1963.47 1216.23 1788.86 1390.84Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1740.83 1410.65L1316.96 1834.52C1150.14 2001.34 879.668 2001.34 712.847 1834.52C546.026 1667.7 546.026 1397.23 712.847 1230.41L1136.72 806.537C1303.54 639.716 1574.01 639.716 1740.83 806.537C1907.65 973.358 1907.65 1243.83 1740.83 1410.65Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1692.8 1430.45L1288.73 1834.52C1129.71 1993.55 871.874 1993.55 712.848 1834.52C553.821 1675.49 553.821 1417.66 712.848 1258.63L1116.92 854.567C1275.94 695.54 1533.78 695.54 1692.8 854.567C1851.83 1013.59 1851.83 1271.43 1692.8 1430.45Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1644.77 1450.26L1260.51 1834.52C1109.28 1985.75 864.079 1985.75 712.847 1834.52C561.614 1683.29 561.614 1438.09 712.847 1286.86L1097.11 902.597C1248.34 751.364 1493.54 751.364 1644.77 902.597C1796 1053.83 1796 1299.03 1644.77 1450.26Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1596.74 1470.06L1232.28 1834.51C1088.84 1977.95 856.28 1977.95 712.841 1834.51C569.403 1691.08 569.403 1458.51 712.841 1315.08L1077.3 950.62C1220.74 807.181 1453.3 807.181 1596.74 950.62C1740.17 1094.06 1740.17 1326.62 1596.74 1470.06Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1548.7 1489.86L1204.05 1834.51C1068.41 1970.16 848.483 1970.16 712.838 1834.51C577.193 1698.87 577.193 1478.94 712.838 1343.3L1057.49 998.65C1193.13 863.005 1413.06 863.005 1548.7 998.65C1684.35 1134.29 1684.35 1354.22 1548.7 1489.86Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1500.67 1509.67L1175.83 1834.51C1047.98 1962.37 840.692 1962.37 712.843 1834.52C584.994 1706.67 584.995 1499.38 712.846 1371.53L1037.69 1046.69C1165.54 918.836 1372.83 918.835 1500.68 1046.68C1628.53 1174.53 1628.52 1381.82 1500.67 1509.67Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1452.65 1529.48L1147.61 1834.51C1027.55 1954.57 832.901 1954.57 712.845 1834.52C592.79 1714.46 592.792 1519.81 712.849 1399.76L1017.89 1094.72C1137.94 974.66 1332.59 974.658 1452.65 1094.71C1572.7 1214.77 1572.7 1409.42 1452.65 1529.48Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1404.62 1549.27L1119.37 1834.52C1007.11 1946.78 825.105 1946.78 712.846 1834.52L712.839 1834.51C600.579 1722.25 600.58 1540.25 712.839 1427.99L998.086 1142.74C1110.35 1030.48 1292.35 1030.48 1404.61 1142.74L1404.62 1142.75C1516.88 1255.01 1516.88 1437.01 1404.62 1549.27Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1356.7 1571.15L1103.15 1824.7C998.103 1929.75 827.787 1929.75 722.74 1824.7L722.661 1824.62C617.613 1719.57 617.614 1549.26 722.661 1444.21L976.213 1190.66C1081.26 1085.61 1251.58 1085.61 1356.62 1190.66L1356.7 1190.74C1461.75 1295.79 1461.75 1466.1 1356.7 1571.15Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1308.79 1593.02L1086.95 1814.86C989.108 1912.7 830.478 1912.7 732.638 1814.86L732.495 1814.72C634.655 1716.88 634.655 1558.25 732.495 1460.41L954.338 1238.56C1052.18 1140.72 1210.81 1140.72 1308.65 1238.56L1308.79 1238.71C1406.63 1336.55 1406.63 1495.18 1308.79 1593.02Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1260.89 1614.89L1070.73 1805.05C980.103 1895.67 833.166 1895.67 742.538 1805.05L742.323 1804.83C651.695 1714.2 651.695 1567.27 742.323 1476.64L932.478 1286.48C1023.11 1195.85 1170.04 1195.85 1260.67 1286.48L1260.89 1286.7C1351.51 1377.33 1351.51 1524.26 1260.89 1614.89Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1212.97 1636.77L1054.51 1795.23C971.091 1878.64 835.846 1878.64 752.43 1795.23L752.143 1794.94C668.727 1711.52 668.727 1576.28 752.143 1492.86L910.604 1334.4C994.02 1250.99 1129.26 1250.99 1212.68 1334.4L1212.97 1334.69C1296.38 1418.1 1296.38 1553.35 1212.97 1636.77Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1165.06 1658.63L1038.3 1785.39C962.094 1861.6 838.542 1861.6 762.338 1785.39L761.972 1785.03C685.768 1708.82 685.768 1585.27 761.972 1509.07L888.737 1382.3C964.942 1306.1 1088.49 1306.1 1164.7 1382.3L1165.06 1382.67C1241.27 1458.87 1241.27 1582.42 1165.06 1658.63Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1117.15 1680.49L1022.07 1775.57C953.078 1844.56 841.219 1844.56 772.226 1775.57L771.789 1775.13C702.796 1706.14 702.796 1594.28 771.789 1525.29L866.866 1430.21C935.859 1361.22 1047.72 1361.22 1116.71 1430.21L1117.15 1430.65C1186.14 1499.64 1186.14 1611.5 1117.15 1680.49Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1069.23 1702.37L1005.85 1765.75C944.068 1827.53 843.901 1827.53 782.12 1765.75L781.611 1765.24C719.83 1703.46 719.83 1603.29 781.611 1541.51L844.994 1478.13C906.775 1416.35 1006.94 1416.35 1068.72 1478.13L1069.23 1478.64C1131.01 1540.42 1131.01 1640.59 1069.23 1702.37Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M1021.34 1724.22L989.652 1755.9C935.083 1810.47 846.609 1810.47 792.039 1755.91L791.451 1755.32C736.882 1700.75 736.882 1612.27 791.451 1557.7L823.139 1526.02C877.708 1471.45 966.183 1471.45 1020.75 1526.02L1021.34 1526.6C1075.91 1581.17 1075.91 1669.65 1021.34 1724.22Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                        <path d="M973.438 1574.59C1020.8 1621.95 1020.8 1698.73 973.442 1746.08C926.087 1793.44 849.306 1793.44 801.949 1746.08L801.289 1745.42C753.932 1698.06 753.93 1621.28 801.286 1573.93C848.641 1526.57 925.421 1526.57 972.779 1573.93L973.438 1574.59Z" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"/>
                    </g>
                </svg>
            </div>

  
            <div className="relative pt-8 pb-64 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    
                    
<SplitText
  text="Small business Accounting tailored to you"
  className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
  delay={300}
  duration={2.0}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
          
         <SplitText
  text="Never miss a tax deadline again"
  className="mt-2 max-w-4xl mx-auto text-lg lg:text-xl text-gray-600"
  delay={150}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
<br></br>
         <SplitText
  text="Cashflow clarity all year round"
  className=" mt-3 max-w-4xl mx-auto text-lg lg:text-xl text-gray-600"
  delay={150}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
<br></br>
         <SplitText
  text="No more guessing what you owe"
  className=" mt-3 max-w-4xl mx-auto text-lg lg:text-xl text-gray-600"
  delay={150}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
<br></br>
         <SplitText
            className=" mt-3 max-w-4xl mx-auto text-lg lg:text-xl text-gray-600"
            text="Support in your language, when you need it"
            delay={100}
            duration={1.0}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            className=" mt-3 max-w-4xl mx-auto text-lg lg:text-xl text-gray-600"
            text="Built for tradies, consultants, creatives & service based businesses"
            delay={200}
            duration={1.0}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
                    
                    <div className="mt-6 flex justify-center gap-x-4">
                        <Magnet 
                    padding={50} 
                    disabled={false} 
                    magnetStrength={10}>
                       <a href="#" className="bg-white text-black px-6 py-3 rounded-md text-base font-semibold flex items-center gap-2 border border-gray-300 hover:bg-gray-50 transition-colors">
                            <span>Explore KP</span>
                            <IconArrowRight className="w-4 h-4 text-gray-600" />
                        </a>
                    </Magnet>
                        <Magnet 
                    padding={50} 
                    disabled={false} 
                    magnetStrength={15}>
                       <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-md text-base font-semibold flex items-center gap-2 hover:bg-purple-500 transition-colors">
                            <span>Contact us</span>
                            <IconArrowRight className="w-4 h-4" />
                        </a>
                    </Magnet>
                        
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;

