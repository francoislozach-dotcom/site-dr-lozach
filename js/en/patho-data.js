/* ============================================================
   Detailed pathology content — Dr Lozach (English)
   Format : { region: { pathologyName: { description, signs[], exams[], medical[], surgical[] } } }
   ============================================================ */

window.PATHO_DETAILS = {
  'Hip': {
    'Hip osteoarthritis': {
      whatIsIt: `Hip osteoarthritis is the progressive wear of the cartilage of the hip joint. Cartilage is the thin, smooth, slippery layer that covers the ends of the bones inside the joint. When it is intact, the femoral head rotates without friction in its bony socket in the pelvis (the acetabulum).

Over time — through natural wear, after a birth abnormality, or following a trauma — this cartilage thins, cracks, and eventually disappears in places. The two bones end up rubbing directly against each other. It is this bone-on-bone contact that triggers pain and stiffness.`,
      symptoms: `The typical pain is located in the groin crease, sometimes on the side of the hip, and often radiates down the thigh towards the knee. It is mechanical in nature: present when walking, climbing stairs, or rising from a chair, and relieved by rest.

At first, the discomfort is intermittent. Then walking becomes more difficult, the walking distance shortens, and a limp develops. Putting on socks or cutting toenails becomes complicated: the hip loses flexibility, especially in rotation. Sleep may be disturbed when turning over at night.`,
      untreated: `Without management, hip osteoarthritis always progresses in the same direction: gradual worsening over several years. Pain becomes more frequent, walking distance shrinks, and independence diminishes. Eventually, everyday activities (putting on shoes, driving, walking 5 minutes) become impossible.

The wear can also cause limb shortening, compensatory muscle contractures, and secondary lower back pain.`,
      treatment: `When symptoms are moderate, simple measures are tried first: painkillers, anti-inflammatory drugs during flare-ups, physiotherapy to maintain mobility and strengthen the muscles around the hip. Ultrasound-guided injections can provide temporary relief.

When pain becomes daily, disturbs sleep, or walking distance diminishes despite medical treatment, total hip replacement (THA) is the gold-standard solution. It replaces the worn area with an artificial joint and allows a rapid return to an active life. A consultation can assess the right time to intervene.`,
      description: "Hip osteoarthritis is defined by the progressive degradation of the articular cartilage of the hip joint.",
      signs: ["Groin pain", "Limp", "Progressive stiffness"],
      exams: ["Hip X-rays", "MRI if in doubt"],
      medical: ["Analgesics, NSAIDs", "Physiotherapy", "Injections"],
      surgical: ["Total hip arthroplasty (THA)"],
    },
    'Femoro-acetabular impingement (FAI)': {
      whatIsIt: `Femoro-acetabular impingement (FAI) is a morphological abnormality of the hip that creates a mechanical pinching effect with every movement. Either the femoral head has a bump at its junction with the neck (Cam type), the edge of the bony socket is over-covering (Pincer type), or both are combined.

With every flexion or rotation, these two bony structures come into conflict and pinch the soft tissues of the joint, in particular the fibrocartilaginous ring known as the labrum.`,
      symptoms: `The pain is typically in the groin crease, sometimes described by the patient as a C-shape when they place their hand around the hip. It appears mainly when sitting for long periods, getting into a car, crossing the legs, or during wide-range movements (sport, stretching).

The hip gradually loses flexibility, particularly internal rotation. In athletes, performance decreases: pain when squatting, running, or changing direction.`,
      untreated: `Repeated impingement eventually damages the labrum (which may tear) and then the adjacent cartilage. This is one of the main causes of hip osteoarthritis in young adults and athletes.

Without correction of the morphological abnormality, the wear mechanism continues: what was only a mechanical impingement becomes early hip osteoarthritis, sometimes by the age of 35–45.`,
      treatment: `Treatment always starts with non-surgical options: adaptation of sporting activity, targeted physiotherapy to strengthen the gluteal and deep hip muscles, anti-inflammatory drugs during flare-ups. This is sufficient in some cases.

If pain persists and a labral or cartilage lesion is confirmed on imaging, arthroscopic surgery can correct the bony abnormality and repair the labrum through two or three small incisions. The aim is twofold: to relieve pain and preserve the hip for the future. A specialist consultation clarifies the indication.`,
      description: "Morphological abnormality of the femoral head-neck junction or acetabular rim creating repeated mechanical impingement.",
      signs: ["C-sign groin pain", "Restricted internal rotation"],
      exams: ["X-rays, Dunn lateral view", "MRI arthrography"],
      medical: ["NSAIDs", "Physiotherapy", "Activity modification"],
      surgical: ["Arthroscopic osteoplasty", "Labral repair"],
    },
    'Avascular necrosis of the femoral head': {
      whatIsIt: `Avascular necrosis (AVN) of the femoral head corresponds to the death of a zone of bone in the femoral head, due to interruption of its blood supply. Bone, as a living tissue, requires a permanent blood supply. When this supply is cut off, the affected area weakens and may eventually collapse.

Several causes are identified: prolonged corticosteroid use, excessive alcohol consumption, trauma, sickle cell disease, deep-sea diving, or sometimes no cause is found. It most often affects young adults between 30 and 50 years of age.`,
      symptoms: `The first sign is generally a groin pain that appears fairly suddenly, sometimes at night, without a clear trigger. At an early stage it can be intermittent and may be mistaken for a simple tendinopathy.

When the necrotic area begins to collapse, pain becomes constant and mechanical, accompanied by a limp and stiffness. The hip loses range of motion.`,
      untreated: `Without management, the weakened bone eventually collapses: the perfect sphericity of the femoral head is lost, and the joint becomes incongruent. At this stage, progression to osteoarthritis is rapid and inevitable, within months to a few years.

The earlier the diagnosis is made, the better the chance of preserving the patient's hip. This is why any sudden, unexplained groin pain in a young adult warrants an MRI scan.`,
      treatment: `At an early stage, before any collapse, core decompression can restore bone circulation and may halt progression. This is a minimally invasive procedure performed through a small incision.

If the femoral head has already collapsed and osteoarthritis is established, total hip replacement is the solution. Early diagnosis is key: a prompt consultation for any unusual hip pain is always worthwhile.`,
      description: "Interruption of the vascular supply to the femoral head causing osteocyte death and progressive collapse.",
      signs: ["Sudden groin pain", "Restricted range of motion"],
      exams: ["MRI (gold standard)", "X-rays"],
      medical: ["Non-weight-bearing", "NSAIDs"],
      surgical: ["Core decompression", "Total hip arthroplasty (THA)"],
    },
    'Labral tears': {
      whatIsIt: `The labrum is a fibrocartilaginous ring that surrounds the rim of the hip socket. It serves three roles: it seals the joint (like a gasket), absorbs shock, and contributes to stability.

A labral tear is a split or detachment of this ring. It most often occurs in the context of femoro-acetabular impingement, but also after a sports trauma or in cases of hip dysplasia.`,
      symptoms: `The pain is in the groin, mechanical in nature, sometimes associated with sensations of clicking, snapping, or locking in certain positions. Patients often describe a "click" with specific movements.

The discomfort is typical when sitting for long periods, driving, or during pivoting or forced flexion activities. A sensation of instability may accompany the pain.`,
      untreated: `An untreated labral tear alters the mechanical function of the hip. Loss of the sealing gasket promotes injury to the adjacent cartilage, and the damaged labrum may fray further with each movement.

In the medium term, the risk is early-onset hip osteoarthritis.`,
      treatment: `First line: activity modification, physiotherapy to strengthen the stabilising muscles, anti-inflammatory drugs during flare-ups. This often reduces symptoms without intervention.

If the tear is disabling and an associated bony impingement is demonstrated, hip arthroscopy allows the labrum to be repaired (sutured) while correcting the underlying mechanical cause. A specialist consultation and targeted imaging determine the indication.`,
      description: "Tear of the acetabular fibrocartilaginous labrum, most often associated with FAI or trauma.",
      signs: ["Groin pain", "Snapping sensation"],
      exams: ["MRI arthrography", "X-rays"],
      medical: ["Activity modification", "Physiotherapy", "NSAIDs"],
      surgical: ["Arthroscopic labral repair"],
    },
    'Gluteus medius tendinopathy': {
      whatIsIt: `The gluteus medius is a muscle located on the side of the hip. Its tendon attaches to a bony prominence called the greater trochanter, easily felt beneath the skin above the thigh. This muscle stabilises the pelvis with every step: without it, we would fall to the side of the advancing leg.

Gluteus medius tendinopathy is a painful condition of this tendon: inflammation, degeneration, or partial tear. It is the hip equivalent of a shoulder tendinopathy. It is very common, particularly in women over 50.`,
      symptoms: `Pain on the lateral aspect of the hip, directly over the bony prominence of the greater trochanter. It is typically triggered at night when lying on the affected side, and appears when climbing stairs, rising from a low chair, or walking for extended periods.

Simply pressing the greater trochanter with a finger is painful. A limp may develop when the tendon is significantly weakened.`,
      untreated: `Chronic inflammation can lead to degeneration and then a partial or complete tendon tear. An established tear causes a permanent limp and loss of strength that impacts independence.

The earlier treatment is initiated, the better the results of non-surgical management.`,
      treatment: `Physiotherapy is the gold-standard treatment: eccentric strengthening exercises, stretching, postural work. It yields excellent results in the majority of cases, but requires commitment over several weeks.

Ultrasound-guided injections can complement treatment. In the case of a confirmed tear on MRI, or failure of well-conducted medical treatment, surgical tendon repair (open or endoscopic) is possible. A consultation guides the most appropriate strategy.`,
      description: "Painful condition of the gluteus medius and minimus tendons at their insertion on the greater trochanter.",
      signs: ["Lateral hip pain", "Night pain"],
      exams: ["Ultrasound", "MRI if tear suspected"],
      medical: ["Eccentric physiotherapy", "Injections"],
      surgical: ["Tendon repair"],
    },
    'Iliopsoas tendinopathy': {
      whatIsIt: `The iliopsoas is a deep muscle that connects the lumbar spine to the femur, passing in front of the hip. It is the main hip flexor: it lifts the thigh when climbing a step or raising the leg in a seated position.

Iliopsoas tendinopathy is a painful condition of this muscle's tendon, generally at its passage in front of the hip. It can occur in athletes (runners, dancers, footballers), after a hip replacement (conflict with the implant), or in isolation.`,
      symptoms: `Deep pain in the groin crease, sometimes associated with an audible snapping sensation ("snapping hip") during certain movements. It is typically triggered by the sit-to-stand movement, climbing stairs, or abdominal exercises.

Normal walking is rarely affected, but sporting activities involving hip flexion (running, cycling, dancing) become painful.`,
      untreated: `The natural course is generally favourable with time and activity modification. However, a chronic tendinopathy can become persistent and limit sporting activity.

In the specific case of conflict with a hip prosthesis, discomfort may persist until the mechanical conflict is resolved.`,
      treatment: `Relative rest, gentle stretching, targeted physiotherapy, and anti-inflammatory drugs are the first-line treatment. The vast majority of cases resolve within a few weeks.

When discomfort persists for several months despite well-conducted treatment, or in the case of confirmed conflict with a prosthetic implant, endoscopic iliopsoas tenotomy may be proposed. A consultation establishes the indication.`,
      description: "Painful condition of the iliopsoas tendon at its passage in front of the hip.",
      signs: ["Deep groin pain", "Snapping hip"],
      exams: ["Dynamic ultrasound", "MRI"],
      medical: ["Relative rest", "Stretching", "Physiotherapy"],
      surgical: ["Endoscopic iliopsoas tenotomy"],
    },
    'Dynamic neurological compression (sciatic nerve)': {
      whatIsIt: `The sciatic nerve is the largest nerve in the body. It descends from the buttock into the thigh, passing through or alongside a deep muscle called the piriformis. In some individuals, this nerve can be compressed at this level during certain movements or positions: this is dynamic compression of the sciatic nerve, sometimes called piriformis syndrome.

Unlike sciatica of lumbar origin (herniated disc), the compression here occurs at the buttock level, outside the back.`,
      symptoms: `Deep pain in the buttock that travels down the leg, sometimes to the foot. It may be accompanied by tingling, numbness, or an electric-shock sensation.

Characteristic feature: pain is aggravated by prolonged sitting (steering wheel, bicycle, desk), walking uphill, or certain hip rotation movements. It may ease on standing or walking a short distance.`,
      untreated: `Untreated chronic compression can lead to persistent nerve suffering, with continuing pain and, in some cases, sensory disturbances or muscle weakness in the affected territory.

The diagnosis is often delayed because patients are initially treated for lumbar sciatica, which is not the true cause.`,
      treatment: `Specialist physiotherapy (piriformis stretching, neural mobilisation), anti-inflammatory drugs, and ultrasound-guided injections are sufficient in the majority of cases.

When compression is confirmed and symptoms resist well-conducted treatment for several months, endoscopic neurolysis can free the sciatic nerve from its adhesions by releasing the compressive piriformis fibres. This is a minimally invasive procedure. A specialist consultation establishes the precise diagnosis and guides treatment.`,
      description: "Compression of the sciatic nerve at buttock level, distinct from lumbar sciatica.",
      signs: ["Buttock pain radiating down the leg", "Worsened by sitting"],
      exams: ["Neurographic MRI", "EMG"],
      medical: ["Physiotherapy", "Ultrasound-guided injections"],
      surgical: ["Endoscopic neurolysis"],
    },
  },

  'Knee': {
    'Knee osteoarthritis': {
      whatIsIt: `Knee osteoarthritis is the progressive wear of the knee cartilage. Cartilage is the smooth layer that covers the bone surfaces inside the joint and allows the two bones — the femur above and the tibia below — to glide without friction.

Over the years, through repeated microtraumas, a previous injury (meniscal or ligamentous), or an alignment defect, this cartilage wears down, cracks, and then disappears. The bones then rub directly against each other, causing pain. Knee osteoarthritis can affect one of the three compartments of the knee (medial, lateral, or patellofemoral) or several simultaneously.`,
      symptoms: `The pain is mechanical: present when walking, climbing and descending stairs, rising from a low chair, and relieved by rest. It is generally located at the front or side of the knee.

The knee progressively stiffens, especially in the morning on waking or after prolonged sitting. Walking distance shortens. Inflammatory flare-ups (swollen, warm knee) can occur.`,
      untreated: `The natural progression is slow but constant: over several years, pain intensifies, range of motion decreases, and the knee may deform (bowing inwards or outwards).

Eventually, walking even a few minutes becomes difficult, independence diminishes, and quality of life declines. Hip or back pain may appear as a consequence.`,
      treatment: `When symptoms are moderate, simple measures are tried first: painkillers, anti-inflammatory drugs during flare-ups, physiotherapy to maintain mobility and strengthen the muscles, injections (corticosteroids, hyaluronic acid), and weight loss when indicated.

When arthritis affects only one compartment and the ligaments are intact, a partial knee replacement (unicompartmental knee arthroplasty, UKA) is sufficient. When wear affects several compartments or the knee is deforming, a total knee replacement (TKA) is the solution. A consultation helps assess the right time to consider surgery.`,
      description: "Knee osteoarthritis defined by progressive destruction of the articular cartilage.",
      signs: ["Mechanical pain", "Morning stiffness", "Limp"],
      exams: ["Weight-bearing X-rays", "MRI if in doubt"],
      medical: ["Analgesics, NSAIDs", "Physiotherapy", "Injections"],
      surgical: ["Unicompartmental knee arthroplasty (UKA)", "Total knee arthroplasty (TKA)"],
    },
    'Anterior cruciate ligament (ACL) tear': {
      whatIsIt: `The anterior cruciate ligament (ACL) is one of two ligaments at the centre of the knee. It plays an essential role in stability: it prevents the tibia from sliding forward under the femur during changes of direction and pivoting movements.

ACL rupture most often occurs during a sports injury: pivoting of the knee with the foot planted on the ground (skiing, football, rugby, handball) or a direct blow. The ligament tears completely or partially.`,
      symptoms: `At the time of injury, the patient often feels a snap or pop, followed by acute pain and rapid knee swelling (within a few hours). At this stage, the diagnosis is often made.

Once the acute phase has passed, instability dominates: a sensation of the "knee giving way" during changes of direction, descending stairs, or pivoting. Straight-line walking is generally possible, but pivoting sport becomes impossible without apprehension.`,
      untreated: `A torn ACL never heals spontaneously. Chronic knee instability leads to repeated sprains, which eventually damage the menisci (secondary lesions) and then the cartilage. In the medium to long term, the risk is early-onset osteoarthritis.

For sedentary patients willing to give up pivoting sports, physiotherapy alone may be sufficient. For young, athletic, or active patients, reconstruction is generally recommended.`,
      treatment: `In the acute phase: rest, ice, analgesics, physiotherapy to recover mobility and muscle bulk. This phase lasts several weeks.

Then, the indication for surgical reconstruction depends on lifestyle: pivoting sport, age, perceived instability, associated lesions. Reconstruction is performed arthroscopically using one of your own tendons as a graft. A consultation allows discussion of the indication and technical choices.`,
      description: "Total or partial ACL tear, the main stabiliser of the knee.",
      signs: ["Initial snap", "Swelling", "Instability"],
      exams: ["MRI", "X-rays"],
      medical: ["Initial rest", "Physiotherapy"],
      surgical: ["Arthroscopic ACL reconstruction"],
    },
    'Posterior cruciate ligament (PCL) tear': {
      whatIsIt: `The posterior cruciate ligament (PCL) is the counterpart of the ACL: it prevents the tibia from sliding backward under the femur. It is anatomically thicker and stronger, making it less frequently injured.

Its rupture most often occurs during a direct blow to the front of the tibia with the knee bent: a road traffic accident (dashboard injury), a forward fall in skiing or on a motorbike, or a contact sports collision.`,
      symptoms: `In the acute phase: pain, swelling, difficulty bending or bearing weight on the leg. The diagnosis may be missed as the signs are sometimes less dramatic than for an ACL tear.

Later, the instability is different — less a "knee giving way" and more a "leg giving out", especially on descents or with prolonged loading. Anterior knee pain (patella) may develop.`,
      untreated: `Like the ACL, a torn PCL does not heal spontaneously. However, an isolated PCL tear is better tolerated than an ACL tear, and many patients recover satisfactory function with appropriate rehabilitation.

On the other hand, with associated multi-ligament injuries (PCL + LCL or other ligaments), instability is severe and progression to osteoarthritis is faster.`,
      treatment: `First line: non-surgical treatment — specific physiotherapy to strengthen the quadriceps (which partially compensates for the PCL), bracing in certain cases. This is sufficient for the majority of isolated tears.

Surgical reconstruction is reserved for persistent instability, multi-ligament injuries, or highly active patients. A specialist consultation clarifies the indication.`,
      description: "PCL tear, less frequent than ACL tear, often caused by a direct anterior tibial blow.",
      signs: ["Posterior pain", "Swelling", "Instability on loading"],
      exams: ["MRI", "Dynamic X-rays"],
      medical: ["Targeted physiotherapy", "Brace"],
      surgical: ["PCL reconstruction"],
    },
    'Meniscal tears': {
      whatIsIt: `The menisci are two crescent-shaped cushions located between the femur and tibia inside the knee (one medial, one lateral). They act as shock absorbers and stabilisers: they distribute loads, protect the cartilage, and contribute to the "locking" of the knee.

A meniscal tear is a split in one of these menisci. It can occur during a trauma (sprain, forced squatting, pivoting sport) — this is the traumatic lesion in young patients. Or it can appear gradually through wear — this is the degenerative tear, common after the age of 50.`,
      symptoms: `Pain localised at the joint line of the knee (medial or lateral), often triggered by certain movements (squatting, turning on the weight-bearing leg). A sensation of clicking or transient locking with specific movements.

In some cases, a fragment of meniscus can shift and lock the knee in flexion: inability to fully straighten the leg. Intermittent knee swelling is common.`,
      untreated: `Traumatic tears in young patients, if significant and symptomatic, can progress to gradual meniscal deterioration and, in the long term, early osteoarthritis of the affected compartment. Some peripheral tears can, however, heal spontaneously.

Degenerative tears are often a reflection of already-established osteoarthritis and their management does not change the long-term prognosis of the knee.`,
      treatment: `For degenerative tears without locking: physiotherapy, analgesics, injections. Medical treatment is effective in the majority of cases.

For traumatic tears in young patients, and for mechanical locking, arthroscopy allows either repair (suturing) of the meniscus where possible, or removal of only the damaged fragment (partial meniscectomy) while preserving as much healthy meniscus as possible. A consultation guides the most appropriate procedure.`,
      description: "Meniscal tear, either traumatic (young patients) or degenerative (over 50).",
      signs: ["Joint-line pain", "Locking", "Joint effusion"],
      exams: ["MRI", "X-rays"],
      medical: ["Physiotherapy", "Injections"],
      surgical: ["Meniscal suture or partial meniscectomy"],
    },
    'Focal cartilage lesions': {
      whatIsIt: `Articular cartilage is the thin smooth layer that covers the end of the bones. When a limited, well-defined area of cartilage is damaged — without the generalised involvement seen in osteoarthritis — this is called a focal cartilage lesion.

The cause may be traumatic (sprain, direct blow) or related to a disorder of the underlying bone vascularisation (osteochondritis dissecans). This condition typically affects young, athletic, or active patients.`,
      symptoms: `Localised mechanical pain, sometimes associated with sensations of clicking or brief locking. Intermittent joint effusion is common.

Unlike osteoarthritis, the discomfort is often tied to a specific movement (descending stairs, a particular degree of flexion, running) rather than being diffuse.`,
      untreated: `An untreated focal lesion can gradually enlarge, the cartilage fragment may detach (loose body within the joint), and in the long term, early osteoarthritis of the affected compartment may develop.

The earlier the lesion is managed, the better the results. Preservation of joint cartilage is the objective.`,
      treatment: `For small stable lesions: physiotherapy, activity modification, monitoring. This may be sufficient to stabilise the lesion.

For larger or symptomatic lesions, several arthroscopic surgical techniques can stimulate cartilage repair: microfractures, autologous cartilage grafting (AutoCart), and reattachment of a fragment when possible. A specialist consultation establishes the precise indication.`,
      description: "Localised articular cartilage damage, often traumatic or from osteochondritis dissecans, distinct from diffuse osteoarthritis.",
      signs: ["Localised pain", "Brief locking", "Joint effusion"],
      exams: ["MRI", "CT arthrography"],
      medical: ["Physiotherapy", "Activity modification"],
      surgical: ["Microfractures", "AutoCart"],
    },
    'Patellar instability': {
      whatIsIt: `The patella (kneecap) is the bone at the front of the knee, nestled in the trochlear groove of the femur (a channel-shaped groove). When this engagement is defective — a too-flat trochlea, a too-high patella, a misaligned axis — the patella can slip out of its track, which is called patellar dislocation.

Patellar instability refers to the repeated tendency of the patella to shift or dislocate. It can occur after an initial trauma or exist on a particular morphology (often congenital).`,
      symptoms: `The first episode is typically a dislocation: the patella comes out of its groove, most often when pivoting on the weight-bearing leg. The knee locks, is very painful, and the patella sometimes returns to its position spontaneously (reduction).

Subsequently, apprehension dominates: fear that the patella will "jump out" again, a sensation of instability with certain movements (stairs, squatting, sport). Anterior knee pain and intermittent swelling may develop.`,
      untreated: `Repeated dislocations progressively damage the cartilage of the patella and trochlea, predisposing to early patellofemoral osteoarthritis. Each episode may detach cartilaginous or bony fragments.

Chronic instability also leads to a loss of confidence in the knee and a significant functional impact, especially in young and athletic patients.`,
      treatment: `After a first episode: immobilisation then physiotherapy to strengthen the quadriceps (particularly the vastus medialis) and stabilise the patella. This may be sufficient.

In cases of recurrence or significant anatomical abnormalities, a stabilisation procedure is proposed. Several techniques exist (medial patellofemoral ligament reconstruction, tibial tubercle transfer, trochleoplasty), chosen according to the abnormalities present. A specialist consultation and precise imaging workup are essential to plan the procedure.`,
      description: "Repeated tendency for patellar dislocation or subluxation, due to anatomical abnormality or post-traumatic sequelae.",
      signs: ["Patellar dislocation", "Apprehension", "Anterior knee pain"],
      exams: ["X-rays, CT scan (TT-TG distance)", "MRI"],
      medical: ["Physiotherapy", "Knee brace"],
      surgical: ["MPFL reconstruction", "Tibial tubercle transfer (TTT)", "Trochleoplasty"],
    },
    'Deformities (genu varum / genu valgum)': {
      whatIsIt: `Normally, viewed from the front, the leg is almost straight. When the axis deviates outwards (bow-legged, like brackets), this is called genu varum. When it deviates inwards (knock-kneed, like an X), this is called genu valgum.

These deformities can be constitutional (present since childhood), or develop gradually through asymmetric wear of the knee cartilage. They often reinforce each other: a deviated axis wears one compartment more, and the wear accentuates the deviation.`,
      symptoms: `The deformity is visible to the naked eye, sometimes well before the onset of pain. When pain does appear, it is located in the overloaded compartment: medial for genu varum, lateral for genu valgum.

Functional impairment (limp, reduced walking distance, stiffness) progressively accompanies the worsening.`,
      untreated: `An uncorrected deformity sustains and accelerates asymmetric cartilage wear. In the long term, progression is towards unicompartmental then global knee osteoarthritis.

The earlier the axis is corrected, the better the joint is preserved, and the more a joint replacement can be delayed or even avoided.`,
      treatment: `For moderate, minimally symptomatic deformities: monitoring, orthopaedic insoles, physiotherapy, weight loss if necessary.

For symptomatic deformities in younger patients with relatively preserved cartilage, a realignment osteotomy allows straightening of the axis by cutting and redirecting the bone. This relieves and preserves the knee for many years. When osteoarthritis is too advanced, a knee replacement is the solution. A consultation and imaging workup determine the appropriate indication.`,
      description: "Deviation of the leg axis (varus or valgus), constitutional or related to asymmetric wear.",
      signs: ["Visible deformity", "Compartmental pain"],
      exams: ["Full-length standing X-rays (pangonometry)"],
      medical: ["Monitoring", "Insoles", "Physiotherapy"],
      surgical: ["Realignment osteotomy", "Joint replacement if advanced osteoarthritis"],
    },
  },

  'Ankle': {
    'Achilles tendinopathy': {
      whatIsIt: `The Achilles tendon is the tendon that connects the calf muscles to the heel. It is the most powerful tendon in the body: it transmits the propulsive force with every step.

Achilles tendinopathy is a painful condition of this tendon. Two forms are distinguished: mid-portion tendinopathy (on the body of the tendon, approximately 4 cm above the heel, a less well-vascularised zone) and insertional tendinopathy (at the tendon's attachment to the heel bone). Causes are multiple: sports overuse, repeated microtraumas, inappropriate footwear, excess body weight.`,
      symptoms: `Pain at the back of the heel or calf, typically in the morning ("start-up" pain with the first steps), which eases with warm-up and then returns at the end of exercise.

Over time, pain becomes constant, present even at rest. A lump or nodule may be felt on the tendon, sometimes tender. The tendon may be thickened.`,
      untreated: `Without management, chronic tendinopathy weakens the tendon and increases the risk of rupture, particularly during a sudden effort or a misstep. Rupture is a surgical emergency in the majority of cases.

A neglected tendinopathy can also make sport impossible and limit daily walking.`,
      treatment: `First-line treatment is medical and prolonged: relative rest (but not total immobilisation), specific physiotherapy (stretching, eccentric calf work), insoles, analgesics. Shockwave therapy may be offered for certain forms.

When pain persists for more than 6 months despite well-conducted treatment, or in the case of rupture, surgery is considered. Several techniques exist (needling, suture, tendon transfer according to the case). A consultation guides the best option.`,
      description: "Painful condition of the Achilles tendon, either at its mid-portion or at its calcaneal insertion.",
      signs: ["Morning pain", "Palpable nodule", "Thickened tendon"],
      exams: ["Ultrasound", "MRI"],
      medical: ["Eccentric physiotherapy", "Insoles", "Shockwave therapy"],
      surgical: ["Needling", "Suture", "Tendon transfer"],
    },
    'Chronic ankle instability': {
      whatIsIt: `The lateral ligaments of the ankle (in particular the anterior talo-fibular ligament) stabilise the ankle and prevent sprains. When a patient has repeated sprains, this is called chronic ankle instability.

This often occurs after an initial poorly treated sprain: the ligaments heal in a poor position, the ankle remains lax, and every twisting movement triggers a new sprain. Chronic instability can also be related to a particular foot morphology (cavus foot, calcaneal varus).`,
      symptoms: `A sensation of the ankle "giving way" on unstable surfaces, especially on uneven ground, on stairs, or during sport. Repeated sprains, sometimes from minor traumas.

A permanent apprehension develops, which alters gait. Lateral pain and chronic swelling are common.`,
      untreated: `Repeated sprains progressively wear the ankle cartilage and can cause osteochondral lesions (cartilage and underlying bone damage). In the long term, the risk is early-onset ankle osteoarthritis.

Instability also limits sporting activity and increases the risk of falls, particularly in older patients.`,
      treatment: `First line: proprioceptive physiotherapy (balance and weight-bearing rehabilitation), strengthening of the peroneal muscles, ankle brace or orthosis during sport.

When instability persists despite well-conducted rehabilitation, surgical ligament repair or reconstruction is proposed (Broström-Gould technique). A consultation assesses the indication and appropriate technique.`,
      description: "Repeated sprains due to deficiency of the lateral ankle ligaments.",
      signs: ["Recurrent sprains", "Ankle giving way", "Apprehension"],
      exams: ["Dynamic X-rays", "MRI"],
      medical: ["Proprioception training", "Peroneal strengthening", "Orthosis"],
      surgical: ["Ligament repair (Broström-Gould)"],
    },
    'Osteochondral lesion of the talar dome': {
      whatIsIt: `The talar dome is the upper surface of the talus (the ankle bone). An osteochondral lesion is a combined injury to the cartilage and the bone immediately beneath it, on this dome.

The cause is most often traumatic (following one or several sprains), but may also be related to a bone vascularisation disorder. This condition frequently affects young and athletic patients.`,
      symptoms: `Deep mechanical ankle pain, present on weight-bearing, during sport, and relieved by rest. Occasional clicking or locking sensation.

Intermittent swelling is common. Pain can be moderate and overlooked for a long time before diagnosis.`,
      untreated: `Without treatment, the lesion worsens: the cartilage fragment can detach (loose body within the joint) and the underlying bone can collapse. In the long term, progression is towards early ankle osteoarthritis.

Early management allows preservation of joint cartilage.`,
      treatment: `For small stable lesions: partial weight-bearing relief, physiotherapy, imaging monitoring. This may be sufficient for stabilisation.

For larger or symptomatic lesions, several arthroscopic surgical techniques can stimulate healing: microfractures, bone grafting, autologous cartilage grafting (AutoCart). A specialist consultation and MRI clarify the indication.`,
      description: "Combined injury to the cartilage and underlying bone at the apex of the talus.",
      signs: ["Deep pain", "Clicking", "Joint effusion"],
      exams: ["MRI", "CT arthrography"],
      medical: ["Non-weight-bearing relief", "Physiotherapy"],
      surgical: ["Microfractures", "AutoCart talus"],
    },
    'Anterior and posterior ankle impingement': {
      whatIsIt: `Ankle impingement refers to pain triggered by a mechanical catching between bony or tendinous structures during certain movements. Two forms are distinguished based on location.

Anterior ankle impingement occurs during dorsiflexion (pulling the toes up towards you). A bony spur, often secondary to repeated microtraumas or old sprains, catches at the front of the joint. This is a typical condition in footballers, dancers, and those who participate in pivoting sports.

Posterior ankle impingement occurs in the opposite movement, during plantarflexion (pointing the foot down). It is caused by the presence of an accessory bone (the os trigonum) or a bony prominence at the back of the talus, which becomes pinched. This condition mainly affects dancers (on pointe), footballers (kicking), and those participating in forced plantarflexion sports.`,
      symptoms: `For anterior impingement: pain on the front of the ankle, triggered by forced dorsiflexion (squatting, walking uphill, kicking a football). Catching sensation, sometimes locking. The ankle may be swollen at the front.

For posterior impingement: pain at the back of the ankle, below the Achilles tendon, triggered by forced plantarflexion (heel-raised, pointe, kicking). Often confused with Achilles tendinopathy but the exact location of pain differs.`,
      untreated: `Without management, the impingement is self-perpetuating: each triggering movement maintains inflammation and may enlarge the bony spur over time. Functional impairment progressively limits sporting activity and certain everyday movements.

The prognosis remains favourable however: these impingements do not degrade the joint as a whole, and their treatment, medical or surgical, gives good results.`,
      treatment: `First line: relative rest, analgesics, physiotherapy (stretching, proprioceptive work), and sometimes a precisely targeted cortisone injection. Temporary adaptation of sporting activity is often necessary.

In cases of failure or persistent symptoms in athletes, ankle arthroscopy can remove the anterior bony spur or the posterior os trigonum. This is a minimally invasive procedure with rapid recovery. A consultation and imaging (X-rays, sometimes CT scan) confirm the diagnosis and establish the indication.`,
      description: "Mechanical catching between bony structures during certain ankle movements, in dorsiflexion (anterior) or plantarflexion (posterior).",
      signs: ["Pain on forced dorsiflexion or plantarflexion", "Catching sensation", "Restricted range of motion"],
      exams: ["X-rays", "CT scan", "MRI if in doubt"],
      medical: ["Relative rest", "Physiotherapy", "Injections"],
      surgical: ["Ankle arthroscopy (bony spur resection / os trigonum removal)"],
    },
  },

  'Foot': {
    'Hallux valgus': {
      whatIsIt: `Hallux valgus, commonly called a "bunion", is the most frequent deformity of the forefoot. It is a lateral deviation of the big toe (which angles towards the other toes) combined with a bony prominence on the inner border of the foot (the first metatarsal head protruding).

This deformity is progressive and multifactorial: family predisposition (the main factor), foot morphology, wearing high-heeled or too-narrow shoes, and ageing. It predominantly affects women.`,
      symptoms: `Initially, the aesthetic appearance and difficulty fitting shoes dominate. Pain then develops over the inner "bump" (rubbing with the shoe), sometimes with inflammation.

As the condition progresses, the big toe may overlap or pass under the second toe, creating a cascade of deformities (hammer toes), corns, and calluses under the forefoot (metatarsalgia).`,
      untreated: `The deformity worsens over time. Shoes become increasingly difficult to wear. Pain spreads to the entire forefoot.

At an advanced stage, osteoarthritis of the big toe joint and complex deformities of the other toes develop, making surgery more complex if it becomes necessary.`,
      treatment: `While symptoms are moderate: appropriate footwear (wide, soft, without high heels), orthopaedic insoles, orthotics (silicone toe separators). This provides relief but does not correct the deformity.

When pain or deformity becomes disabling, surgery is proposed. Several techniques exist (metatarsal osteotomies, soft tissue releases), chosen according to severity. Modern techniques allow minimally invasive surgery with immediate weight-bearing. A consultation allows planning of the appropriate procedure.`,
      description: "The most frequent forefoot deformity: lateral deviation of the big toe with medial prominence of the metatarsal head.",
      signs: ["Medial bony prominence", "Shoe-fitting pain", "Associated hammer toes"],
      exams: ["Weight-bearing foot X-rays"],
      medical: ["Appropriate footwear", "Insoles", "Orthotics"],
      surgical: ["Realignment osteotomy (minimally invasive techniques)"],
    },
    'Hammer toes / claw toes': {
      whatIsIt: `Hammer toes and claw toes are deformities of the lesser toes (the 2nd, 3rd, 4th, or 5th toe) that curl up and no longer lie flat. A claw toe is the classic "balled-up" deformity on the top of the toe; a hammer toe is a variant.

These deformities result from an imbalance between the tendons that flex and those that extend the toe. They often accompany hallux valgus, or appear in isolation (narrow footwear, cavus foot, post-sprain sequelae).`,
      symptoms: `Corns and calluses on the tip of the toe or on top (rubbing with the shoe), often painful. Difficulty fitting shoes. Associated metatarsalgia (pain under the forefoot).

At an advanced stage, the toe becomes rigid and the deformity is fixed (can no longer be manually straightened).`,
      untreated: `The deformity progressively stiffens and becomes irreducible. Pain worsens and footwear becomes impossible. Corns can become infected, especially in diabetic patients.

The later management is undertaken, the more complex the surgery.`,
      treatment: `At the flexible stage (toe still reducible): orthotics, separators, wide footwear.

At the rigid stage or when pain is disabling: corrective surgery. Several combined techniques are possible (tendon releases, Weil osteotomy, interphalangeal arthrodesis). A consultation assesses reducibility and guides the technique.`,
      description: "Flexion deformities of the lesser toes due to tendon imbalance.",
      signs: ["Dorsal corns", "Metatarsalgia", "Shoe-fitting difficulty"],
      exams: ["Clinical examination", "X-rays"],
      medical: ["Orthotics", "Wide footwear"],
      surgical: ["Weil osteotomy", "Tendon releases", "Interphalangeal arthrodesis"],
    },
    "Morton's neuroma": {
      whatIsIt: `Morton's neuroma is a chronic irritation of a small nerve located between two metatarsal heads, most often between the 3rd and 4th (or between the 2nd and 3rd). Through repeated compression between the bones, the nerve thickens and becomes inflamed.

Predisposing factors include narrow footwear, high heels, prolonged walking, and foot morphology. The condition predominantly affects women.`,
      symptoms: `The characteristic sign is a burning, "electric-shock" pain between two toes, triggered by walking in closed shoes and relieved by removing shoes and massaging the foot.

The sensation of "walking on a pebble" or on a bunched-up sock is typical. Numbness or tingling may be felt in the affected toes.`,
      untreated: `The course is variable: some neuromas remain stable for years, while others become disabling. Pain may restrict walking and shoe-fitting.

Without management, pain tends to increase in frequency and intensity.`,
      treatment: `First line: wide shoes, orthopaedic insoles with a metatarsal bar, cortisone injections (often effective, sometimes sufficient).

In cases of medical treatment failure, surgery can be offered to release or remove the compressed nerve. The procedure is brief and allows rapid return to walking. A consultation establishes the indication.`,
      description: "Chronic irritation of an inter-metatarsal nerve (most often between the 3rd and 4th metatarsals).",
      signs: ["Electric-shock pain", "Pebble sensation", "Toe numbness"],
      exams: ["Ultrasound", "MRI"],
      medical: ["Insoles with metatarsal bar", "Injections"],
      surgical: ["Neurectomy or nerve release"],
    },
    'Metatarsalgia': {
      whatIsIt: `Metatarsalgia refers to pain under the forefoot, at the base of the toes, over the weight-bearing area of the metatarsal heads (the ends of the long bones of the foot). It is not a disease in itself but a symptom with several possible causes.

Static metatarsalgia (the most common) is linked to a permanent imbalance of loading — a metatarsal that is longer or lower than the others, a "round" forefoot, or a thinning of the plantar fat pad with age. Dynamic metatarsalgia is related to overloading during walking. Associated deformities often aggravate symptoms: hallux valgus transferring load to adjacent rays, hammer toes altering weight distribution, cavus foot. The condition particularly affects women after the menopause.`,
      symptoms: `Pain under the forefoot, on weight-bearing, aggravated by prolonged walking and wearing heels. A burning sensation or feeling of walking on pebbles.

Calluses localised under the painful metatarsal heads. Forefoot fatigue at the end of the day.`,
      untreated: `Persistent metatarsalgia can cause progressive gait changes (antalgic limp), with consequences for the knee and hip. Calluses can become complicated (infection, fissures), especially in diabetic patients.

Without correction of the underlying cause, pain tends to worsen.`,
      treatment: `First line: orthopaedic insoles offloading the painful metatarsal heads, appropriate footwear, weight loss if necessary, physiotherapy. This provides relief in the majority of cases.

When the cause is an identified bony deformity (a metatarsal that is too long or too low), a realignment osteotomy (Weil) may be proposed. A consultation and X-ray workup clarify the indication.`,
      description: "Forefoot pain under the metatarsal heads, due to loading imbalance or associated pathology.",
      signs: ["Plantar forefoot pain", "Calluses", "Walking fatigue"],
      exams: ["Weight-bearing X-rays", "Podoscopy"],
      medical: ["Offloading insoles", "Appropriate footwear"],
      surgical: ["Weil osteotomy"],
    },
    'Midfoot osteoarthritis': {
      whatIsIt: `The midfoot is the central part of the foot, located between the hindfoot (heel) and the forefoot (metatarsals and toes). It includes two main joints: the Chopart joint (between the hindfoot and midfoot) and the Lisfranc joint (between the midfoot and forefoot). These joints transmit forces with every step and participate in the foot's adaptation to the ground.

Midfoot osteoarthritis is cartilage wear of one or more of these joints, most often at the Lisfranc level. It can be primary (age-related) or secondary to an old injury often overlooked (an unnoticed Lisfranc sprain), a static foot disorder (flat foot, cavus foot), or an inflammatory disease.`,
      symptoms: `Pain on the top of the foot, in its middle portion, when walking and weight-bearing. Aggravated by prolonged standing and uneven terrain.

A bony prominence may appear on the top of the foot (rubbing with footwear). Progressive midfoot stiffness.`,
      untreated: `Lisfranc osteoarthritis progresses slowly but steadily. Pain intensifies, walking distance shortens, and the foot may flatten (loss of the longitudinal arch).

In the long term, functional impairment becomes significant.`,
      treatment: `First line: orthopaedic insoles with arch support, appropriate footwear (rigid or semi-rigid soles), analgesics, injections.

When medical treatment is no longer sufficient, Lisfranc arthrodesis (fusion of the worn joint) permanently eliminates pain by sacrificing a range of motion that has in any case become minimal. A consultation helps assess the right time for surgery.`,
      description: "Cartilage wear of the midfoot joints (Lisfranc, Chopart), primary or post-traumatic.",
      signs: ["Midfoot pain", "Dorsal bony prominence", "Stiffness"],
      exams: ["Weight-bearing X-rays", "CT scan"],
      medical: ["Arch support insoles", "Rigid footwear", "Injections"],
      surgical: ["Midfoot arthrodesis (Lisfranc and/or Chopart)"],
    },
  },

  'Trauma': {
    'Lower limb fractures': {
      whatIsIt: `A fracture is a break in the continuity of a bone. In the lower limb, it can affect the femur (thigh), tibia or fibula (leg), ankle, or foot bones. Severity depends on the location, displacement, whether the fracture is open or closed (skin intact or not), and the patient's general condition.

Causes vary: a fall (particularly in elderly patients for femoral neck fractures), a road traffic accident, a sports injury, or an accident of daily life. In older patients, a simple fall may be sufficient due to bone fragility (osteoporosis).`,
      symptoms: `Intense immediate pain, inability to bear weight on the leg, sometimes visible deformity (displaced or shortened segment), swelling, and bruising appearing within hours.

A fracture is almost always clinically evident. The diagnosis is confirmed by X-rays, sometimes supplemented by CT scan for complex fractures.`,
      untreated: `An untreated or poorly managed fracture can heal in a poor position (malunion), cause joint stiffness, a limp, or even non-union (failure to heal). Intra-articular fractures that are not reduced progress to early osteoarthritis.

In elderly patients, an untreated femoral neck fracture is associated with loss of independence and a major vital risk. It is a surgical emergency.`,
      treatment: `Management depends on the type of fracture. For undisplaced and stable fractures: immobilisation with a cast or splint, rest, and monitoring. For displaced or unstable fractures: surgical fixation (plates and screws, intramedullary nails, or screws according to the case) which allows reduction and stabilisation of the fracture.

Management is urgent. A prompt consultation is necessary for the best guidance. Recovery always includes a rehabilitation phase.`,
      description: "Break in bony continuity affecting the femur, tibia, fibula, or foot.",
      signs: ["Intense pain", "Functional impairment", "Deformity"],
      exams: ["X-rays", "CT scan if complex"],
      medical: ["Immobilisation if stable"],
      surgical: ["Osteosynthesis (plates, nails, screws)"],
    },
    'Minor ankle sprains': {
      whatIsIt: `Ankle sprain is the most common injury in orthopaedics. It is a stretching, or even a partial tear, of the lateral ligaments of the ankle. The typical mechanism is an inward twist of the foot in plantarflexion, stressing the anterior talo-fibular ligament (most often affected).

Minor sprains correspond to stretching without complete ligament rupture. They heal in the vast majority of cases with appropriate treatment.`,
      symptoms: `Immediate pain on the outer aspect of the ankle, rapid swelling, and bruising appearing in the following hours (often visible below the malleolus). Walking is possible but painful.

Clinical examination distinguishes a minor sprain from a severe sprain. X-rays are taken if an associated fracture is suspected.`,
      untreated: `A poorly managed sprain leaves sequelae: chronic pain, stiffness, and above all instability with a risk of repeated sprains (chronic ankle instability). The ligament heals in a poor position and the ankle remains fragile.

The rehabilitation phase after a sprain, even a minor one, is essential. It is what prevents recurrence.`,
      treatment: `Treatment is based on the "RICE" protocol: Rest, Ice, Compression (strapping or orthosis), Elevation. Analgesics. Progressive return to weight-bearing as soon as pain allows.

Physiotherapy is essential from the acute phase: recovery of mobility, then proprioceptive rehabilitation (balance and weight-bearing re-training) to prevent recurrence. A consultation allows assessment of severity and guidance of rehabilitation.`,
      description: "Stretching or partial tear of the lateral ankle ligaments without complete rupture.",
      signs: ["Lateral pain", "Swelling", "Walking possible"],
      exams: ["Clinical examination", "X-rays if in doubt"],
      medical: ["RICE protocol", "Strapping/orthosis", "Proprioceptive physiotherapy"],
      surgical: ["No surgery in the acute phase"],
    },
    'Severe ankle sprains': {
      whatIsIt: `A severe sprain corresponds to a complete rupture of one or more lateral ankle ligaments. The mechanism is the same as for a minor sprain (varus twist) but the trauma is more violent.

A severe sprain may be accompanied by other lesions: an associated fracture, tendon injury, or osteochondral lesion of the talar dome.`,
      symptoms: `Very acute pain, significant and immediate swelling, extensive bruising. Often a snapping sensation at the time of injury. Weight-bearing is often impossible or very limited.

A precise clinical examination (sometimes delayed due to pain) and imaging (X-rays, sometimes MRI) are necessary.`,
      untreated: `Without appropriate management, a severe sprain leaves severe chronic instability, repeated sprains, and predisposes to early ankle osteoarthritis. Insufficient rehabilitation is the main cause of poor outcomes.`,
      treatment: `For the majority of severe sprains: immobilisation with a boot or splint for 4 to 6 weeks, followed by prolonged and thorough rehabilitation. Non-surgical treatment gives good results in most cases.

Surgery is reserved for cases of residual instability after well-conducted rehabilitation, or for associated lesions (fracture, cartilage damage). An initial consultation and a follow-up assessment allow appropriate management decisions.`,
      description: "Complete rupture of one or more lateral ankle ligaments.",
      signs: ["Intense pain", "Major swelling", "Weight-bearing impossible"],
      exams: ["X-rays", "MRI if in doubt"],
      medical: ["Boot/splint 4–6 weeks", "Prolonged rehabilitation"],
      surgical: ["Ligament repair if residual instability"],
    },
    'Acute knee ligament injuries': {
      whatIsIt: `The knee is stabilised by four main ligaments: the two cruciate ligaments (ACL and PCL) at the centre, and the two collateral ligaments (medial and lateral) on the sides. A violent trauma can injure one or more ligaments in isolation or in combination.

Multi-ligament injuries (two or more) are rare but serious. Knee dislocation (complete loss of contact between femur and tibia) is an absolute emergency as it may be accompanied by vascular injury (popliteal artery) threatening limb viability.`,
      symptoms: `Immediate pain, sometimes rapid swelling (a sign of a serious injury), major instability, and sometimes inability to mobilise the knee. A dislocation may reduce spontaneously, but the knee remains very unstable and painful.

A precise clinical examination (often performed under anaesthesia in the emergency setting) and early MRI provide a full assessment.`,
      untreated: `An untreated multi-ligament injury leaves major knee instability, severe loss of function, and predisposes to early osteoarthritis. For dislocations, failure to manage the emergency may compromise the limb.`,
      treatment: `As an emergency: immobilisation, systematic vascular and neurological assessment for dislocations, and specialist management.

Subsequently: surgical ligament reconstruction, sometimes in several stages depending on the injuries. Outcomes depend greatly on the promptness and quality of management. A specialist consultation is essential.`,
      description: "Injury to one or more knee ligaments by violent trauma. Knee dislocation is an absolute emergency.",
      signs: ["Rapid swelling", "Major instability", "Vascular risk if dislocated"],
      exams: ["Clinical examination", "MRI", "Vascular assessment if dislocated"],
      medical: ["Initial immobilisation"],
      surgical: ["Ligament reconstruction (often staged)"],
    },
    'Tendon ruptures (Achilles, patellar, quadriceps)': {
      whatIsIt: `A tendon rupture is the sudden tear of a tendon, most often on a background of pre-existing chronic tendinopathy (degenerative tendon). Three main locations in the lower limb:

— The Achilles tendon (most frequent), in patients aged 40 to 60, during a sporting start-up (squash, tennis, running).
— The patellar tendon (below the kneecap), less common.
— The quadriceps tendon (above the kneecap), mainly in older patients.`,
      symptoms: `An immediate sensation of a "whiplash" or snapping at the back of the leg (Achilles) or at the front of the knee (patellar/quadriceps). Acute pain. Inability to raise onto the tiptoes (Achilles) or straighten the knee (patellar/quadriceps).

A gap may be felt along the tendon. The clinical diagnosis is often obvious.`,
      untreated: `An untreated tendon rupture leaves a permanent loss of function: inability to rise onto the tiptoes, run, or jump (Achilles), or to extend the leg against resistance (patellar/quadriceps). The prognosis depends on the promptness of management.`,
      treatment: `Treatment can be surgical or non-surgical depending on the type of rupture, age, activity level, and time elapsed. For the Achilles tendon, non-surgical treatment (equinus walking boot) is possible in certain forms; surgery (suture) is preferred in athletes. For patellar and quadriceps ruptures, surgery is almost always indicated.

A prompt consultation after the injury allows the appropriate decision. Recovery always includes an immobilisation phase followed by prolonged rehabilitation.`,
      description: "Sudden tendon rupture (Achilles, patellar, or quadriceps), often on a degenerative tendon.",
      signs: ["Whiplash sensation", "Palpable gap", "Loss of function"],
      exams: ["Clinical examination", "Ultrasound", "MRI if in doubt"],
      medical: ["Walking boot (Achilles)"],
      surgical: ["Tendon suture"],
    },
    'Dislocations (prosthetic and non-prosthetic)': {
      whatIsIt: `A dislocation is the complete loss of contact between the two surfaces of a joint. In a native joint, it most often results from a significant trauma (hip, knee, or ankle dislocation). In a prosthetic joint, it can occur during an extreme movement or a fall, and sometimes with a moderate effort when the alignment of the components is not optimal.

Dislocations are emergencies because the prolonged position can damage nearby vessels and nerves, as well as joint structures.`,
      symptoms: `Very acute pain, visible deformity, absolute inability to mobilise the joint. The position of the limb is characteristic according to the type of dislocation.

The examination systematically looks for vascular or nerve injury (the diagnosis is clinical, supplemented by X-rays to confirm and look for associated lesions).`,
      untreated: `A dislocation that is not reduced promptly can lead to permanent vascular and nerve damage, bone necrosis, and major joint sequelae. For a dislocated prosthesis, failure to reduce can damage the prosthetic components.`,
      treatment: `Urgent reduction, most often under general anaesthesia (or sedation). X-ray check following reduction, then immobilisation to allow healing of the damaged structures.

In cases of repeated prosthetic dislocations, surgical revision may be necessary (component exchange, repositioning). A specialist consultation is essential. For any acute dislocation, attending an emergency department is imperative.`,
      description: "Complete loss of contact between two articular surfaces, in a native or prosthetic joint.",
      signs: ["Intense pain", "Deformity", "Absolute impairment"],
      exams: ["X-rays", "Neurovascular assessment"],
      medical: ["Urgent reduction"],
      surgical: ["Surgical revision if recurrence"],
    },
  },
};
