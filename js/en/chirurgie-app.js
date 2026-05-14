
/* ============================================================
   Surgical procedures data — English version
   ============================================================ */
const SECTIONS = [{
  id: 'hanche',
  kind: 'hip',
  name: 'Hip',
  tagline: 'The major weight-bearing joint.',
  items: [{
    name: 'Total hip arthroplasty (THA)',
    tag: 'Hip',
    principe: "Replacement of the worn hip joint (osteoarthritis, avascular necrosis, fracture) with implants. Press-fit uncemented acetabular cup, cemented or uncemented femoral stem depending on bone quality, ceramic or metal-on-polyethylene femoral head. Objective: eliminate pain and durably restore mobility.",
    deroulement: "General anaesthesia or spinal block. Operative time 1 to 1.5 hours. Hospital stay: day surgery or 1 night. Day-case procedure possible in selected patients. Anterior or posterior approach depending on patient morphology and surgeon preference.",
    suites: "Full weight-bearing permitted from the day after surgery. Driving resumption at 4 weeks. Return to daily activities at 4–8 weeks. Light sport (walking, swimming, cycling) at 3 months. Radiological follow-up at 4 weeks, 1 year, then every 5 years."
  }, {
    name: 'Hip revision arthroplasty',
    tag: 'Hip',
    principe: "Re-operation on an existing THA for aseptic loosening, implant wear, recurrent dislocation, infection or periprosthetic fracture. Requires comprehensive pre-operative work-up (bloods, bone scan, CT scan) to identify the cause and plan implant exchange.",
    deroulement: "Longer procedure than primary THA (2 to 3 hours depending on complexity). General anaesthesia. Hospital stay 2 to 5 days. May require bone reconstruction (grafts, revision implants).",
    suites: "Weight-bearing may be delayed depending on bone reconstruction. Rehabilitation longer than primary THA (3 to 6 months). Reinforced dislocation precautions. Very satisfactory functional outcomes in non-infected revisions."
  }, {
    name: 'Core decompression of the femoral head',
    tag: 'Hip',
    principe: "Surgical treatment of avascular necrosis of the femoral head at early stages (ARCO I–II). Involves drilling a tunnel through the femoral neck to the necrotic zone to reduce intra-osseous pressure and stimulate revascularisation. May be combined with stem cell injection or bone grafting.",
    deroulement: "Short procedure (30 to 45 minutes). General anaesthesia or spinal block. Day surgery or 1-night stay. Performed under intraoperative fluoroscopic guidance.",
    suites: "Partial weight-bearing with crutches for 6 weeks. Progressive weight-bearing thereafter. Normal activity at 3 months. MRI monitoring at 3 and 6 months to assess revascularisation."
  }, {
    name: 'Arthroscopic osteoplasty (FAI)',
    tag: 'Hip',
    principe: "Arthroscopic treatment of femoroacetabular impingement (cam and/or pincer). Resection of excess bone at the head-neck junction (cam osteoplasty) and/or acetabular rim (acetabuloplasty), combined with labral repair or reinsertion using anchors. Corrects the mechanical cause and preserves cartilage.",
    deroulement: "Hip arthroscopy under general anaesthesia. Duration 1.5 to 2 hours. Hospital stay 1 to 2 days. Intraoperative orthopaedic traction table. 2 to 3 arthroscopic portals.",
    suites: "Partial weight-bearing on crutches 2 to 4 weeks depending on labral procedure. Physiotherapy from day 15. Progressive return to sport at 4–6 months. Excellent outcomes in athletes with preserved cartilage."
  }, {
    name: 'Neurolysis (sciatic nerve)',
    tag: 'Hip',
    principe: "Surgical release of the sciatic nerve compressed by the piriformis muscle or other anatomical structures in the gluteal region (piriformis syndrome, dynamic compressions). Piriformis muscle division and release of perineural adhesions under endoscopic guidance.",
    deroulement: "Posterior hip endoscopy or mini-open approach under general anaesthesia, in prone or lateral decubitus. Duration 1 hour. Day-case procedure.",
    suites: "Immediate weight-bearing permitted. Early mobilisation physiotherapy. Progressive resolution of neurological symptoms over 4 to 12 weeks. Return to sport at 2–3 months."
  }]
}, {
  id: 'genou',
  kind: 'knee',
  name: 'Knee',
  accroche: "The most heavily loaded joint.",
  items: [{
    name: 'Total knee arthroplasty (TKA)',
    tag: 'Knee',
    principe: "Replacement of the worn femoro-tibial and patellar articular surfaces with metal implants and a polyethylene tibial insert. Indicated for advanced uni- or tricompartmental knee osteoarthritis. Lower limb alignment correction is integrated into the surgical procedure.",
    deroulement: "General anaesthesia or spinal block. Duration 1.5 hours. Hospital stay 4 to 5 days. Implants are placed with ROSA robotic assistance, enabling high-precision implant positioning, personalised planning and optimal surgical reproducibility.",
    suites: "Immediate weight-bearing with a walking frame from day 1. Intensive physiotherapy in hospital then outpatient. Flexion >90° expected at 6 weeks. Driving resumption at 8 weeks. Normal activity at 3–4 months. X-ray check at 1 year then every 5 years."
  }, {
    name: 'Unicompartmental knee arthroplasty (UKA)',
    tag: 'Knee',
    principe: "Selective replacement of the single affected compartment (medial or lateral), preserving the cruciate ligaments and healthy compartments. Indicated for isolated unicompartmental osteoarthritis in active patients with intact ligaments. Less invasive than TKA.",
    deroulement: "General anaesthesia or spinal block. Duration 1 hour. Hospital stay 2 to 3 days. Day-case possible in selected patients. Implants are placed with ROSA robotic assistance, enabling high-precision implant positioning, personalised planning and optimal surgical reproducibility.",
    suites: "Immediate weight-bearing. Faster functional recovery than TKA. Driving resumption at 4–6 weeks. Light sport at 2–3 months. More natural joint feel than TKA."
  }, {
    name: 'High tibial osteotomy (HTO)',
    tag: 'Knee',
    principe: "Surgical correction of lower limb alignment to offload the arthritic medial compartment. Involves opening the proximal tibia medially and correcting to 3–5° of residual valgus using a locking plate (TomoFix). Preserves the native joint. Indicated in young, active patients with isolated medial compartment osteoarthritis.",
    deroulement: "General anaesthesia. Duration 1 hour 15. Hospital stay 3 to 4 days. Preoperative planning on standing long-leg radiograph is essential. Osteotomy performed under intraoperative fluoroscopic guidance.",
    suites: "Partial weight-bearing on crutches 6 weeks. Full weight-bearing at 6–8 weeks depending on consolidation. Light sport resumption at 4–6 months. Complete consolidation at 3 months. Hardware removal possible at 18–24 months."
  }, {
    name: 'ACL reconstruction (Anterior Cruciate Ligament)',
    tag: 'Knee',
    principe: "Reconstruction of the torn ACL using an autograft to restore anterior and rotational stability of the knee. Three graft options depending on morphology and activity: patellar tendon (bone-tendon-bone), hamstrings (gracilis/semitendinosus), or quadriceps tendon. Lemaire extra-articular tenodesis added if significant rotational instability.",
    deroulement: "Arthroscopy under general anaesthesia. Duration 1 hour 15 to 1 hour 30. Hospital stay 1 to 2 days or day-case. Tibial and femoral bone tunnels for graft fixation with interference screws or staples.",
    suites: "Immediate weight-bearing in a brace. Intensive physiotherapy from day 5. Stationary cycling at 6 weeks. Running at 4–5 months. Return to pivot-contact sport at 9 months according to objective criteria (isokinetics, functional testing)."
  }, {
    name: 'PCL reconstruction (Posterior Cruciate Ligament)',
    tag: 'Knee',
    principe: "Reconstruction of the torn PCL using autograft or allograft to restore posterior knee stability. Indicated for grade III tears or combined injuries (posterolateral corner). Trans-tibial or tibial inlay technique depending on tear location.",
    deroulement: "Arthroscopy ± supplementary open approach depending on technique. General anaesthesia. Duration 1.5 to 2 hours. Hospital stay 2 to 3 days. Simultaneous posterolateral corner reconstruction if required.",
    suites: "Extension brace 4 to 6 weeks. Initial partial weight-bearing. Priority quadriceps strengthening physiotherapy. Return to sport at 9–12 months. Longer rehabilitation than ACL."
  }, {
    name: 'Partial arthroscopic meniscectomy',
    tag: 'Knee',
    principe: "Arthroscopic economic resection of the unstable, non-repairable meniscal zone (avascular area). Mechanical offloading procedure to eliminate painful impingement. Preserves the maximum functional meniscal tissue. Indicated for degenerative lesions or non-suturable white-zone tears.",
    deroulement: "Arthroscopy under general or regional anaesthesia. Duration 30 to 45 minutes. Day-case in the vast majority of cases. 2 arthroscopic portals.",
    suites: "Immediate weight-bearing permitted. Normal walking within 5 to 10 days. Return to sport at 4–6 weeks. Icing and NSAIDs for the first few days."
  }, {
    name: 'Arthroscopic meniscal repair',
    tag: 'Knee',
    principe: "Arthroscopic repair of a traumatic meniscal tear in the vascular zone (red zone). Gold standard for preserving the meniscus in young patients. All-inside (FasT-Fix), inside-out or outside-in techniques depending on location. Often combined with ACL reconstruction to optimise healing.",
    deroulement: "Arthroscopy under general anaesthesia. Duration 1 to 1.5 hours depending on complexity. 1-night stay or day-case. Resorbable sutures or suture anchors via arthroscopic portals.",
    suites: "Partial weight-bearing on crutches 4 to 6 weeks. No flexion >90° for 6 weeks. Progressive physiotherapy. Return to sport at 4–6 months. Healing rate 80–90% in the red zone."
  }, {
    name: 'Autologous cartilage graft — AutoCart technique',
    tag: 'Knee',
    principe: "Biological reconstruction of a focal cartilage defect (ICRS III–IV) using a thin autologous cartilage graft — AutoCart technique. Involves harvesting thin slices of hyaline cartilage from a non-weight-bearing zone of the knee, then transplanting and fixing them onto the defect in a single-stage procedure. Unlike two-stage techniques (MACI), AutoCart requires no cell culture or biomaterial: the patient's own native cartilage is used directly, preserving the original tissue structure and chondrocyte viability. Indicated for defects between 1 and 8 cm², on a stable, well-aligned knee.",
    deroulement: "Single-stage procedure — a major advantage over classical two-stage techniques. Arthroscopy or mini-arthrotomy under general anaesthesia. Duration 1 hour. Performed as a day case. Cartilage slices harvested from the non-weight-bearing zone (intercondylar notch, trochlear border) then placed and fixed on the defect under arthroscopic guidance.",
    suites: "Partial weight-bearing on crutches 6 weeks. Gentle physiotherapy in non-weight-bearing immediately to maintain cartilage trophicity. Progressive weight-bearing from 6–8 weeks. Light sport resumption at 6–9 months. Return to pivot-contact sport at 12–18 months. Control MRI at 1 year to assess integration and quality of regenerated cartilage."
  }, {
    name: 'Patellar instability surgery',
    tag: 'Knee',
    principe: "Surgical correction of recurrent patellar dislocation by reconstruction of the medial patellofemoral ligament (MPFL) and/or realignment of the anterior tibial tubercle (ATT). Procedure choice based on anatomical assessment: ATT-TG distance, patellar height, trochlear dysplasia (Dejour classification). Trochleoplasty for severe dysplasia.",
    deroulement: "General anaesthesia. Duration 1 to 2 hours depending on associated procedures. Hospital stay 1 to 2 days. MPFL reconstruction using gracilis or quadriceps tendon graft — ATT osteotomy via mini-approach if medialisation required.",
    suites: "Extension brace 4 to 6 weeks. Immediate weight-bearing permitted with brace. Vastus medialis strengthening physiotherapy. Return to sport at 4–6 months. Recurrence rate <5% with well-planned anatomical surgery."
  }]
}, {
  id: 'cheville',
  kind: 'ankle',
  name: 'Ankle',
  accroche: "Stability with every step.",
  items: [{
    name: 'Ankle ligament reconstruction',
    tag: 'Ankle',
    principe: "Anatomical reconstruction of the anterior talofibular ligament (ATFL) and calcaneofibular ligament (CFL) to treat chronic ankle instability following recurrent sprains. Broström-Gould technique: resection and reinforcement of the ligaments with retensioning of the extensor retinaculum. Global gold standard, achievable by pure arthroscopy. Restores mechanical stability while preserving native ankle kinematics.",
    deroulement: "General or regional anaesthesia. Duration 45 minutes to 1 hour. Performed as a day case. Arthroscopic or mini-open approach depending on anatomy. Associated osteochondral talar lesions treated simultaneously if required.",
    suites: "Walking boot 4 to 6 weeks. Immediate weight-bearing permitted in the boot. Intensive proprioceptive physiotherapy from 6 weeks. Light sport resumption at 3 months. Full return to sport at 4–6 months. Success rate >90% in the long term."
  }, {
    name: 'Ankle arthroscopy',
    tag: 'Ankle',
    principe: "Arthroscopic exploration and surgical treatment of the ankle (2 to 3 portals). Main indications: anterior or posterior impingement (tibial and talar osteophytes, os trigonum), chronic synovitis, intra-articular loose bodies, osteochondral lesions of the talus, joint debridement. Anterior arthroscopy for dorsiflexion impingement; posterior endoscopy in prone position for posterior impingement and flexor hallucis longus (FHL) tendon release.",
    deroulement: "General or regional anaesthesia. Duration 45 minutes to 1 hour. Performed as a day case. Intraoperative pneumatic tourniquet. 2 to 3 portals depending on anterior or posterior approach.",
    suites: "Immediate weight-bearing permitted from the day after surgery. Comfort shoe or light boot for 2 to 3 weeks. Early mobilisation physiotherapy. Return to sport at 6–8 weeks for simple impingement. Excellent outcomes in athletes, particularly for osteophytic impingement."
  }, {
    name: 'Ankle cartilage graft',
    tag: 'Ankle',
    principe: "Surgical treatment of osteochondral lesions of the talus using autologous cartilage grafting. Osteochondral talar lesions are frequently associated with severe sprains and chronic instability. Single-stage thin autologous cartilage graft technique (AutoCart): harvesting of hyaline cartilage slices from the non-weight-bearing zone of the ipsilateral knee, transfer and fixation on the talar defect under arthroscopic guidance. Indicated for ICRS III–IV defects between 1 and 4 cm² on a stable or simultaneously stabilised ankle.",
    deroulement: "Single-stage procedure. Ankle arthroscopy under general anaesthesia. Duration 1 hour. Performed as a day case. Cartilage slices harvested at the knee then transferred arthroscopically to the talar defect. Ankle stabilisation performed simultaneously if associated instability.",
    suites: "Strict non-weight-bearing on crutches 6 weeks. Protective boot. Gentle physiotherapy in non-weight-bearing to maintain joint mobility. Progressive weight-bearing at 6–8 weeks. Light sport resumption at 6–9 months. Full sport return at 12–18 months. Control MRI at 1 year."
  }, {
    name: 'Achilles tendon surgery',
    tag: 'Ankle',
    principe: "Surgical management of Achilles tendon pathology resistant to conservative treatment (Alfredson protocol, shockwave therapy). Several procedures depending on the condition: tenoscopy (endoscopic debridement of the tendon sheath and neovessels) for mid-portion tendinopathy — open tenotomy with longitudinal tenotomies (tendon combing) for degenerative forms — flexor hallucis longus (FHL) tendon transfer for severe insertional tendinopathy with resection of the calcified enthesis — minimally invasive direct repair for acute tendon ruptures.",
    deroulement: "General or regional anaesthesia. Duration 45 minutes to 1 hour depending on procedure. Performed as a day case. Prone position. Endoscopic (tenoscopy) or mini-open approach depending on indication. Intraoperative pneumatic tourniquet.",
    suites: "Equinus boot for 4 to 6 weeks for suture and tendon transfer procedures. Immediate weight-bearing in the boot permitted. Progressive mobilisation physiotherapy at 6 weeks. Eccentric triceps surae strengthening from 2 months. Running at 4–5 months. Full sport return at 6 months."
  }]
}, {
  id: 'pied',
  kind: 'foot',
  name: 'Foot',
  accroche: "Where everything starts — and bears.",
  items: [{
    name: 'Hallux valgus surgery',
    tag: 'Foot',
    principe: "Surgical correction of big toe deformity by first metatarsal osteotomy. Reference technique: Scarf osteotomy combined with Akin osteotomy for moderate to severe forms. Basal M1 osteotomy for severe forms with high M1–M2 angle. First metatarsophalangeal arthrodesis for rheumatological or arthritic forms. Objective: correct the deformity, eliminate pain and allow normal footwear.",
    deroulement: "Regional anaesthesia (ankle block) or general. Duration 45 minutes to 1 hour. Performed as a day case. Medial mini-approach. Internal fixation with screws or staples. Simultaneous correction of lateral toes if required.",
    suites: "Immediate weight-bearing permitted from the operating theatre in a Barouk shoe. Barouk shoe for 6 weeks. Normal footwear at 6–8 weeks. Residual swelling possible up to 3–6 months. Return to sport at 3–4 months."
  }, {
    name: 'Toe deformity surgery',
    tag: 'Foot',
    principe: "Surgical correction of claw or hammer toe deformities of the lateral toes. Flexible forms: percutaneous flexor tenotomy and PIP joint capsulotomy. Rigid forms: PIP joint resection arthroplasty (Du Vries technique) or PIP arthrodesis with wire or implant. Weil osteotomy of the corresponding metatarsal if associated transfer metatarsalgia. Often performed simultaneously with hallux valgus correction.",
    deroulement: "Regional anaesthesia (ankle block) or general. Duration 20 to 45 minutes depending on number of toes. Performed as a day case. Dorsal or percutaneous approach depending on technique. Temporary K-wire fixation of the toe 4 to 6 weeks if arthrodesis.",
    suites: "Immediate weight-bearing permitted from the operating theatre in a Barouk shoe. K-wire removal in clinic at 4–6 weeks. Weekly dressings. Normal footwear at 6–8 weeks. Residual swelling for 2 to 3 months."
  }, {
    name: "Morton's neuroma surgery",
    tag: 'Foot',
    principe: "Surgical resection of the neuroma (fibrous hypertrophy of the common plantar digital nerve) in the affected intermetatarsal space, most commonly the 3rd space (M3–M4). Reference dorsal intermetatarsal approach: resection of the neuroma and associated transverse metatarsal ligament. Plantar approach reserved for surgical revisions. Indicated after failure of conservative treatment (orthotics, injections, sclerosing alcohol).",
    deroulement: "Regional anaesthesia (ankle block) or general. Duration 30 minutes. Performed as a day case. Dorsal intermetatarsal approach, discrete scar. Complete excision of the neuroma and commissural band.",
    suites: "Immediate weight-bearing permitted from the operating theatre in a wide or Barouk shoe. Dressings for 2 weeks. Normal footwear at 3–4 weeks. Progressive resolution of neurological symptoms over 4 to 8 weeks. Efficacy >80% in the long term."
  }, {
    name: 'Midfoot arthrodesis (Lisfranc)',
    tag: 'Foot',
    principe: "Surgical fusion of the Lisfranc joints (tarsometatarsal) affected by primary or post-traumatic arthritis (sequelae of Lisfranc fracture-dislocation). Resection of degenerate articular cartilage and fixation of the involved rays with dedicated screws or plates until complete bony union. Definitively eliminates pain from pathological intermetatarsal movement.",
    deroulement: "General or regional anaesthesia. Duration 1 to 1.5 hours depending on number of rays fused. 1-night stay or selected day case. Dorsal approach. Internal fixation with compression screws or dedicated plate depending on rays involved.",
    suites: "Strict non-weight-bearing on crutches 6 weeks. Plaster or resin boot. Progressive weight-bearing at 6–8 weeks depending on radiological consolidation. Normal footwear at 3–4 months. Complete consolidation at 3 months. Light sport resumption at 6 months."
  }, {
    name: 'Metatarsalgia surgery',
    tag: 'Foot',
    principe: "Lowering and shortening osteotomy of the metatarsal head (Weil technique) to relieve mechanical metatarsalgia from overloading of the central rays (M2–M3–M4). Involves an oblique osteotomy of the metatarsal head allowing its proximal translation and lowering, thereby reducing plantar pressure under the affected head. Often combined with correction of corresponding toe deformities.",
    deroulement: "Regional anaesthesia (ankle block) or general. Duration 30 to 45 minutes. Performed as a day case. Dorsal approach. May involve 1 to 3 rays depending on baropodometric assessment.",
    suites: "Immediate weight-bearing permitted from day 1 in a Barouk shoe. Weekly dressings for 3 weeks. Normal footwear at 6–8 weeks. Toe mobilisation physiotherapy from day 15. Return to sport at 2–3 months."
  }]
}, {
  id: 'traumatologie',
  kind: 'trauma',
  name: 'Trauma surgery',
  accroche: "Urgent care, without delay.",
  items: [{
    name: 'Internal fixation of lower limb fractures',
    tag: 'Trauma',
    principe: "Surgical stabilisation of lower limb fractures with metallic implants (screws, plates, intramedullary nails) to allow bony union and early weight-bearing. Implant choice depends on fracture type, bone segment, bone quality and skin condition. Femoral neck fractures: percutaneous screw fixation or arthroplasty depending on age and displacement — Trochanteric fractures: intramedullary nailing (gamma nail, PFNA) — Femoral and tibial shaft fractures: locked intramedullary nailing — Tibial plateau fractures: locking plate according to Schatzker classification — Malleolar fractures: screw fixation or wiring according to Weber classification.",
    deroulement: "General anaesthesia or spinal block depending on location. Duration 1 to 2 hours depending on complexity. Hospital stay day-case to 7 days depending on fracture and patient. Systematic intraoperative fluoroscopic control. 3D CT scan essential preoperatively for complex articular fractures.",
    suites: "Weight-bearing according to fracture type and implant: immediate for stable trochanteric and diaphyseal fractures — delayed 6 weeks for complex articular fractures. Early physiotherapy. Systematic thromboembolism prophylaxis. Radiological consolidation monitored at 6 weeks, 3 months and 6 months. Hardware removal possible at 18–24 months depending on implant."
  }, {
    name: 'Acute knee ligament repair',
    tag: 'Trauma',
    principe: "Surgical treatment of acute knee ligamentous injuries (ACL, PCL, grade III MCL, LCL, posterolateral corner) in unstable or combined forms. Knee dislocation is an absolute vascular and surgical emergency. Peripheral injuries (LCL, posterolateral corner) benefit from early repair-reinsertion at day 10–15 to optimise healing. ACL reconstruction is deferred until the acute inflammatory phase has resolved.",
    deroulement: "General anaesthesia. Duration 1.5 to 2 hours depending on associated injuries. Hospital stay 2 to 3 days. Systematic preoperative vascular assessment in case of dislocation (CT angiography). Diagnostic arthroscopy combined for assessment of meniscal and cartilaginous injuries.",
    suites: "Extension brace 4 to 6 weeks depending on procedure. Initial partial weight-bearing on crutches. Early mobilisation physiotherapy from day 5. Progressive muscle strengthening. ACL reconstruction deferred to 3–6 months if required. Return to sport at 9–12 months."
  }, {
    name: 'Achilles tendon repair (acute rupture)',
    tag: 'Trauma',
    principe: "Direct surgical repair of the ruptured Achilles tendon as a delayed emergency (ideally within 8 to 15 days of rupture). Reference minimally invasive or percutaneous technique: trans-osseous suture or calcaneal anchors, providing immediate mechanical resistance and early weight-bearing. Re-rupture rate <2% vs 10% with conservative treatment alone. Indicated in all active patients without surgical contraindication.",
    deroulement: "General or regional anaesthesia. Duration 45 minutes. Performed as a day case. Prone position. Posterior mini-approach or percutaneous technique. Intraoperative tendon tension checked.",
    suites: "Immediate equinus boot from theatre. Weight-bearing in the boot permitted from day 1. Progressive reduction of equinus over 6 weeks. Mobilisation physiotherapy at 6 weeks. Running at 4–5 months. Full sport return at 6–9 months depending on level and activity."
  }, {
    name: 'Patellar and quadriceps tendon repair',
    tag: 'Trauma',
    principe: "Emergency surgical repair of extensor mechanism ruptures of the knee. Patellar tendon rupture (young athlete <40 years, often on pre-existing tendinopathy): direct repair reinforced with trans-osseous cerclage or patellar anchors. Quadriceps tendon rupture (patient >50 years, predisposing comorbidities: renal failure, corticosteroids, obesity): direct trans-osseous or anchor repair, reinforced with Dacron bands if tissue quality is poor. Functional emergency — delay <15 days to avoid retraction.",
    deroulement: "General anaesthesia or spinal block. Duration 1 to 1.5 hours. Hospital stay 1 to 2 days. Systematic intraoperative check of active extension before wound closure.",
    suites: "Extension brace 4 to 6 weeks. Immediate weight-bearing permitted with brace. Progressive mobilisation physiotherapy at 6 weeks. Quadriceps strengthening at 2 months. Running at 4–6 months. Full sport return at 6–9 months."
  }, {
    name: 'Reduction and stabilisation of dislocations',
    tag: 'Trauma',
    principe: "Surgical or orthopaedic management of traumatic and prosthetic dislocations of the lower limb. Traumatic hip dislocation: reduction as an absolute emergency under general anaesthesia (<6 hours to prevent avascular necrosis) — systematic post-reduction CT scan. Knee dislocation: vascular emergency — systematic CT angiography — immediate reduction. Recurrent THA dislocation: surgical revision of implants (cup/stem orientation, change to large-head 36–40 mm or dual-mobility cup, capsular reconstruction). TKA dislocation: revision with constrained implants if persistent instability.",
    deroulement: "Orthopaedic reduction as an emergency under general anaesthesia for traumatic dislocations. Revision surgery for recurrent prosthetic dislocations: duration 2 to 3 hours, hospital stay 3 to 5 days depending on reconstruction required.",
    suites: "Traumatic hip dislocation: immobilisation 4 to 6 weeks, delayed weight-bearing, MRI monitoring at 3 months to screen for secondary avascular necrosis. Surgically treated THA dislocation: reinforced anti-dislocation precautions for 3 months, immediate weight-bearing permitted. Priority muscle stabilisation physiotherapy."
  }]
}];

/* ============================================================
   Hero
   ============================================================ */
function InterventionsHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 180,
      paddingBottom: 80,
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.42,
      mixBlendMode: 'screen',
      filter: 'hue-rotate(180deg) saturate(1.4) contrast(1.15) brightness(1.1)',
      pointerEvents: 'none',
      zIndex: 0,
      maskImage: 'radial-gradient(ellipse 75% 85% at 70% 55%, black 30%, rgba(0,0,0,0.6) 65%, transparent 95%)',
      WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 70% 55%, black 30%, rgba(0,0,0,0.6) 65%, transparent 95%)'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/chirurgie-hero.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "◍ Surgery \xB7 Lower limb"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Surgical")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display soft-dynamic",
    style: {
      color: 'var(--gold)',
      fontStyle: 'italic',
      display: 'inline-block'
    }
  }, "procedures.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      maxWidth: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      marginTop: 48,
      fontFamily: 'var(--serif)',
      fontStyle: 'italic'
    }
  }, "From arthroplasty to arthroscopy — every procedure, explained.")));
}

/* ============================================================
   Section header (between groups)
   ============================================================ */
function SectionHeader({
  section,
  index
}) {
  const deeper = index % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      borderTop: '1px solid var(--line)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 100,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-15%',
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: 0.35,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(JointGlyph, {
    kind: section.kind,
    size: 620
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ /", String(index + 1).padStart(2, '0'), " — ", section.name), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, section.name, ".", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, section.tagline))));
}

/* ============================================================
   Accordion item
   ============================================================ */
function InterventionRow({
  item,
  isOpen,
  onToggle,
  deeper
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      borderBottom: '1px solid var(--line)',
      transition: 'background 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    className: "hoverable",
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: 'var(--ink)',
      padding: '32px 0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      opacity: 0.6,
      fontSize: 12
    }
  }, isOpen ? '−' : '+'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 'clamp(24px, 3vw, 36px)',
      lineHeight: 1.15,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, item.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.14em',
      padding: '6px 12px',
      border: '1px solid rgba(0, 212, 255, 0.4)',
      background: 'rgba(0, 212, 255, 0.08)',
      color: 'var(--gold)',
      borderRadius: 999
    }
  }, item.tag.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 18,
      transition: 'transform 0.4s ease',
      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      display: 'inline-block',
      width: 14,
      textAlign: 'center'
    }
  }, "›")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: isOpen ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.5s cubic-bezier(0.7, 0, 0.2, 1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "intervention-grid",
    style: {
      padding: isOpen ? '8px 0 56px' : '0',
      transition: 'padding 0.4s',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Column, {
    label: "01 / Overview",
    body: item.principe
  }), /*#__PURE__*/React.createElement(Column, {
    label: "02 / Procedure",
    body: item.deroulement,
    bordered: true
  }), /*#__PURE__*/React.createElement(Column, {
    label: "03 / Recovery",
    body: item.suites,
    bordered: true
  }))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .intervention-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .intervention-col-bordered { border-left: 0 !important; padding-left: 0 !important; padding-top: 24px; border-top: 1px solid var(--line); }
        }
      `));
}
function Column({
  label,
  body,
  bordered
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: bordered ? 'intervention-col-bordered' : '',
    style: {
      paddingLeft: bordered ? 36 : 0,
      paddingRight: 36,
      borderLeft: bordered ? '1px solid rgba(0, 212, 255, 0.25)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.16em',
      marginBottom: 16
    }
  }, "— ", label.toUpperCase()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--ink)',
      margin: 0
    }
  }, body));
}

/* ============================================================
   App
   ============================================================ */
function App() {
  useReveal();
  const [openKey, setOpenKey] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "chirurgie"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(InterventionsHero, null), /*#__PURE__*/React.createElement(Marquee, {
    items: ['THA', 'TKA', 'ACL', 'Arthroscopy', 'Osteotomy', 'Cartilage', 'Tendon', 'Ligament', 'Arthroplasty']
  }), SECTIONS.map((sec, si) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: sec.id
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    section: sec,
    index: si
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: si % 2 === 1 ? 'var(--bg-deep)' : 'var(--bg)'
    }
  }, sec.items.map((it, ii) => {
    const key = `${sec.id}-${ii}`;
    return /*#__PURE__*/React.createElement(InterventionRow, {
      key: key,
      item: it,
      isOpen: openKey === key,
      onToggle: () => setOpenKey(openKey === key ? null : key),
      deeper: si % 2 === 1
    });
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
