<script lang="ts">
	import Navbar from '$lib/components/mainnavbar.svelte'
// Ha később dinamikus tartalom vagy további logika kell,
// ide írd be a logikát.
</script>
<Navbar />
<style>
.page-wrapper {
	display: flex;
	justify-content: center;
	padding: 4rem 1rem;
	min-height: 100vh;
	box-sizing: border-box;
}

.card {
	background: #2f2f2f;
	padding: 2rem;
	max-width: 900px;
	width: 100%;
        padding-top: 10px !important;
    box-shadow: 0px 4px 0px 0px rgba(255, 255, 255, 0.137) inset, 0px -4px 0px 0px rgba(0, 0, 0, 0.241) inset, 5px 5px 36px #0000001a;
}

h1, h2, h3 {
	color: #ffffff;
	margin-top: 2rem;
}

p {
	margin-top: 1rem;
	line-height: 1.6;
	color: #b9b9b9;
}

pre, code {
	background-color: #f4f4f4;
	padding: 4px 8px;
	border-radius: 4px;
	font-family: monospace;
}

ul {
	margin: 1rem 0 1rem 2rem;
	list-style-type: disc;
	color: #c4c4c4;
}

a {
	color: #0066cc;
	text-decoration: underline;
}

hr {
	border: none;
	border-top: 1px solid #ffffff;
	margin: 2rem 0;
}
</style>



<div class="page-wrapper">
	<div class="card">
		<h1>0.0 Felhasználási Feltételek – StarlightNetwork</h1>
		<p><strong>Hatályos: 2025. július 22.</strong></p>
		<p>Ez a dokumentum a StarlightNetwork Discord és Minecraft szervereihez (továbbiakban: „Szolgáltatás”) való hozzáférésre és használatra vonatkozó feltételeket tartalmazza. A Szolgáltatás használatával elfogadod a jelen feltételeket.</p>
		<p><strong>Weboldal és szervercím:</strong> <a href="https://StarlightNetwork.hu">https://StarlightNetwork.hu</a><br><strong>Szervernevek:</strong> StarlightNetwork Discord, StarlightNetwork Minecraft</p>
		<hr />

		<h2>1.0 Általános szabályok</h2>
		<p>1.1 A StarlightNetwork egy közösségi alapú szórakoztató platform, amely saját szabályrendszer alapján működik.</p>
		<p>1.2 Fenntartjuk a jogot arra, hogy <strong>bármelyik felhasználót bármilyen okból, vagy akár ok nélkül kitiltsunk</strong>, ideértve, de nem kizárólagosan: szabálysértés, trollkodás, zaklatás vagy a közösség megzavarása.</p>
		<p>1.3 A kitiltások és büntetések <strong>nem fellebbezhetőek</strong>, kivéve ha az adminisztrátorok másként döntenek.</p>
		<hr />

		<h2>2.0 Felelősség kizárása</h2>
		<p>2.1 A Szolgáltatást <strong>„ahogy van”</strong> biztosítjuk. Nem vállalunk garanciát arra, hogy a szolgáltatás folyamatosan elérhető, hibamentes vagy biztonságos.</p>
		<p>2.2 Nem vagyunk felelősek semmilyen <strong>adatvesztésért, fiókfeltörésért vagy egyéb károkért</strong>, amelyek a felhasználót vagy a szervert érhetik.</p>
		<p>2.3 A saját biztonságodról <strong>neked kell gondoskodnod</strong>, például erős jelszó használatával, kéttényezős hitelesítéssel stb.</p>
		<p>2.4 A hibák és bugok kihasználása szigorúan tilos. Az ilyen viselkedés azonnali kitiltást vonhat maga után. Kérjük, minden hibát jelents be az adminisztrátoroknak.</p>
		<hr />

		<h2>3.0 Adatkezelés és GDPR‑megfelelés</h2>
		<p>3.1 A Szolgáltatás használatakor <strong>technikai és személyes adatokat</strong> gyűjthetünk (pl. IP‑cím, felhasználónév, aktivitás, Discord ID, Minecraft UUID).</p>
		<p>3.2 Az adatok kizárólag a <strong>szerver működtetéséhez</strong>, moderáláshoz és jogsértések megelőzéséhez szükséges mértékben kerülnek tárolásra.</p>
		<p>3.3 Az adatok <strong>nem kerülnek értékesítésre vagy jogosulatlan megosztásra</strong>, kivéve ha jogi kötelezettség írja elő.</p>
		<p>3.4 Adataidhoz való hozzáférést, módosítást vagy törlést a következő e‑mail címen kérhetsz: <strong>support@starlightnetwork.hu</strong>.</p>
		<p>3.5 Az adatkezelés megfelel az <strong>EU Általános Adatvédelmi Rendeletének (GDPR)</strong>, valamint az alkalmazandó nemzetközi adatvédelmi törvényeknek.</p>
		<p>3.6 Részletes Adatkezelési Tájékoztatónkat külön dokumentumban tesszük közzé.</p>
		<hr />

		<h2>4.0 Tartalom és viselkedés</h2>
		<p>4.1 Tilos bármilyen <strong>illegális, gyűlöletkeltő, szexuális, diszkriminatív vagy káros tartalom</strong> közzététele a szervereken.</p>
		<p>4.2 A felhasználók által megosztott tartalomért <strong>ők maguk felelősek</strong>, de fenntartjuk a jogot a moderálásra, törlésre és szankcionálásra.</p>
		<p>4.3 A Szolgáltatásban való részvételhez <strong>legalább 13 éves életkor</strong> szükséges (a Discord ToS és COPPA alapján).</p>
		<hr />

		<h2>5.0 Felhasználói magatartás és kötelezettségek</h2>
		<h3>5.1 Elfogadható használat</h3>
		<p>A szolgáltatás használata kizárólag jogszerű célokra és a jelen Feltételekkel összhangban történhet. Tilos:</p>
		<ul>
			<li>Jogosulatlan hozzáférés más fiókokhoz vagy rendszerekhez</li>
			<li>Automatizált eszközök, botok, makrók, scriptek használata a játék manipulálására</li>
			<li>Több fiók használata korlátozások megkerülésére</li>
			<li>Zaklatás, fenyegetés, trágár vagy provokatív viselkedés</li>
			<li>Jogvédett vagy jogsértő tartalom, spam, illetve mások zaklatása</li>
		</ul>
		<h3>5.2 Felhasználói tartalom</h3>
		<ul>
			<li>A tartalom tulajdonjoga a felhasználónál marad, de a StarlightNetwork jogosult azt megjeleníteni, moderálni vagy eltávolítani</li>
			<li>A tartalomnak meg kell felelnie a jogszabályoknak és közösségi normáknak</li>
			<li>A jogsértő vagy nem megfelelő tartalom eltávolítható, a hozzá kapcsolódó fiókok szankcionálhatók</li>
		</ul>
		<h3>5.3 Játékbeli magatartás</h3>
		<ul>
			<li>Tilos a szerverhibák vagy rendszer glitch‑ek szándékos kihasználása</li>
			<li>A biztonsági problémákat haladéktalanul jelenteni kell</li>
			<li>A játékon belüli veszteségek a játékmenet részét képezik – nem jár értük kártérítés</li>
		</ul>
		<h3>5.4 Szankciók és következmények</h3>
		<ul>
			<li>Tartalomszabályzat megsértése esetén az adott tartalom és kapcsolódó fiók törölhető vagy felfüggeszthető</li>
			<li>Virtuális eszközök, rangok vagy pontok elvesztése visszavonhatatlan lehet</li>
			<li>Nincs lehetőség kártérítésre vagy helyreállításra</li>
			<li>A szolgáltatást saját felelősségedre használod</li>
		</ul>
		<hr />

		<h2>6.0 Jogi nyilatkozat és összhang más szabályzatokkal</h2>
		<p>6.1 A StarlightNetwork nem áll kapcsolatban a Mojang Studios‑szal, a Microsoft‑tal vagy a Discord Inc.‑vel.</p>
		<p>6.2 A Szolgáltatás megfelel a <strong>Minecraft EULA</strong> és a <strong>Discord ToS</strong> szabályainak.</p>
		<p>6.3 A jelen szabályzat nem mentesít az eredeti szolgáltatások saját feltételeinek betartása alól.</p>
		<hr />

		<h2>7.0 Kapcsolat</h2>
		<p>Kérdés esetén vedd fel velünk a kapcsolatot:<br /><strong>support@starlightnetwork.hu</strong></p>
		<hr />

		<h2>8.0 Platform rendelkezésre állása és módosításai</h2>
		<h3>8.1 Szolgáltatás elérhetősége</h3>
		<ul>
			<li>A szolgáltatás megszakításmentes vagy hibamentes működését nem garantáljuk</li>
			<li>Kompatibilitás minden eszközzel, operációs rendszerrel vagy böngészővel nem garantált</li>
			<li>Adatvesztés elkerülését technikai hibák során nem tudjuk garantálni</li>
			<li>Előzetes értesítést minden karbantartásról vagy frissítésről nem tudunk biztosítani minden esetben</li>
		</ul>
		<h3>8.2 Platform módosításai</h3>
		<ul>
			<li>Módosíthatjuk a funkciókat, kinézetet vagy működést</li>
			<li>Technikai okokból kiigazíthatjuk a pontokat, statisztikákat vagy rangokat</li>
			<li>Új játékelemeket vezethetünk be, vagy meglévőket eltávolíthatunk</li>
			<li>A szabályokat és játékmenetet ésszerű értesítéssel megváltoztathatjuk</li>
		</ul>
		<hr />

		<h2>9.0 Felelősség kizárása</h2>
		<h3>9.1 Garanciák kizárása</h3>
		<ul>
			<li>A tartalom pontosságát vagy teljességét nem garantáljuk</li>
			<li>A zavartalan vagy hibamentes működést nem garantáljuk</li>
			<li>A biztonságot az illetéktelen hozzáféréssel szemben nem garantáljuk</li>
			<li>Kompatibilitást az eszközeiddel nem garantáljuk</li>
		</ul>
		<h3>9.2 Felelősség korlátozása</h3>
		<ul>
			<li>Virtuális veszteségekért, rug pull-okért vagy trading döntésekért nem vállalunk felelősséget</li>
			<li>Technikai hibákért, adatvesztésért vagy platformleállásokért nem felelünk</li>
			<li>Automatikus AI döntésekért a prediction piacokon nem vállalunk felelősséget</li>
			<li>Más felhasználók vagy harmadik felek tetteiért nem vagyunk felelősek</li>
			<li>Bármely közvetett, véletlen, különleges vagy következményes károkért sem</li>
		</ul>
		<h3>9.3 Educational Purpose</h3>
		<p>Platformunk oktatási és szórakoztató célú. Nem pénzügyi tanácsadás, nem valós kriptovaluta kezelés.</p>
		<hr />

		<h2>10.0 Fiók megszüntetése</h2>
		<h3>10.1 Önkéntes törlés</h3>
		<ul>
			<li>A kérés után 14 nappal kerül végrehajtásra</li>
			<li>Ezen időszak alatt visszavonható a törlés supporton keresztül</li>
			<li>Véglegesen eltávolítja a fiókot és az adatait</li>
			<li>Anonimizált adatokat statisztikai célokra megtartható</li>
		</ul>
		<h3>10.2 Platform által történő megszüntetés</h3>
		<ul>
			<li>Szigorú szabálysértések esetén felfüggeszthetjük vagy törölhetjük a fiókot</li>
			<li>Visszaélés, csalás vagy jogsértés gyanúja miatt</li>
			<li>Technikai vagy biztonsági okok miatt</li>
			<li>Jogszabályi kötelezettség alapján</li>
		</ul>
		<h3>10.3 A megszüntetés hatása</h3>
		<ul>
			<li>A platformhoz való hozzáférés azonnal megszűnik</li>
			<li>Az összes virtuális előny, eszköz és valuta elveszik</li>
			<li>A feltételek releváns pontjai továbbra is érvényben maradnak</li>
			<li>Nincs kártérítés elveszett virtuális értékekért</li>
		</ul>
		<hr />

		<h2>11.0 Szerzői jog és tartalomhasználat</h2>
		<h3>11.1 Platform tulajdonjog</h3>
		<ul>
			<li>Forráskód, algoritmusok, játékmechanikák</li>
			<li>Logók, márkák, dizájn és UI elemek</li>
			<li>Játékfunkciók és vizuális rendszerek</li>
		</ul>
		<h3>11.2 Felhasználói tartalom</h3>
		<ul>
			<li>A tartalom tulajdonosa te magad vagy</li>
			<li>Jogot adsz nekünk a tartalom megjelenítésére és moderálására</li>
			<li>Tartalmaid jogszerűsége a te felelősséged</li>
			<li>Tilos mások jogait sértő tartalom közzététele</li>
		</ul>
		<hr />

		<h2>12.0 Adatvédelem</h2>
		<p>Az adatkezelésre vonatkozó részleteket a külön közzétett <strong>Adatkezelési Tájékoztató</strong> (Privacy Policy) tartalmazza, amely a jelen feltételek részét képezi.</p>
		<hr />

		<h2>13.0 Egyéb rendelkezések</h2>
		<h3>13.1 Teljességi záradék</h3>
		<p>A jelen dokumentum és az Adatkezelési Tájékoztató képezi a teljes megállapodást.</p>
		<h3>13.2 Érvénytelenség</h3>
		<p>Ha bármely feltétel jogilag érvénytelen, a többi érvényben marad.</p>
		<h3>13.3 Módosítások</h3>
		<p>Időről időre frissíthetik a feltételeket. Jelentős változásokról e-mailben és platformon belül is értesítünk. A használat folytatása az új feltételek elfogadását jelenti.</p>
		<hr />

		<p><strong>A Szolgáltatás használatával elfogadod a jelen Felhasználási Feltételeket.</strong></p>
	</div>
</div>
