const form = document.getElementById("biodataForm");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const resultCard = document.getElementById("resultCard");
const resultContent = document.getElementById("resultContent");

const fields = [
  "nama",
  "nim",
  "prodi",
  "tempatLahir",
  "tanggalLahir",
  "noHp",
  "email",
  "alamat"
];

function setError(id, text) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + "Error");

  if (input) input.classList.toggle("invalid", Boolean(text));
  if (error) error.textContent = text || "";
}

function clearErrors() {
  fields.forEach(id => setError(id, ""));
  document.getElementById("jenisKelaminError").textContent = "";
  message.textContent = "";
  message.className = "message";
}

function validate() {
  let valid = true;

  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const prodi = document.getElementById("prodi").value;
  const tempatLahir = document.getElementById("tempatLahir").value.trim();
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const noHp = document.getElementById("noHp").value.trim();
  const email = document.getElementById("email").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');

  if (!nama) {
    setError("nama", "Nama wajib diisi.");
    valid = false;
  }

  if (!nim) {
    setError("nim", "NIM wajib diisi.");
    valid = false;
  } else if (!/^\d+$/.test(nim)) {
    setError("nim", "NIM hanya boleh berisi angka.");
    valid = false;
  }

  if (!prodi) {
    setError("prodi", "Program studi wajib dipilih.");
    valid = false;
  }

  if (!tempatLahir) {
    setError("tempatLahir", "Tempat lahir wajib diisi.");
    valid = false;
  }

  if (!tanggalLahir) {
    setError("tanggalLahir", "Tanggal lahir wajib dipilih.");
    valid = false;
  }

  if (!jenisKelamin) {
    document.getElementById("jenisKelaminError").textContent =
      "Jenis kelamin wajib dipilih.";
    valid = false;
  }

  if (!noHp) {
    setError("noHp", "No. HP wajib diisi.");
    valid = false;
  } else if (!/^\d+$/.test(noHp)) {
    setError("noHp", "No. HP hanya boleh berisi angka.");
    valid = false;
  } else if (noHp.length < 10 || noHp.length > 15) {
    setError("noHp", "No. HP harus 10–15 digit.");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    setError("email", "Email wajib diisi.");
    valid = false;
  } else if (!emailPattern.test(email)) {
    setError("email", "Format email belum benar.");
    valid = false;
  }

  if (!alamat) {
    setError("alamat", "Alamat wajib diisi.");
    valid = false;
  }

  return valid;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  clearErrors();

  if (!validate()) {
    message.textContent = "Data belum lengkap atau masih terdapat kesalahan.";
    message.className = "message fail";
    resultCard.classList.add("hidden");
    return;
  }

  const data = new FormData(form);
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;

  const biodata = [
    ["Nama Lengkap", data.get("nama")],
    ["NIM", data.get("nim")],
    ["Program Studi", data.get("prodi")],
    ["Tempat Lahir", data.get("tempatLahir")],
    ["Tanggal Lahir", data.get("tanggalLahir")],
    ["Jenis Kelamin", jenisKelamin],
    ["No. HP", data.get("noHp")],
    ["Email", data.get("email")],
    ["Alamat", data.get("alamat")]
  ];

  resultContent.innerHTML = biodata.map(item => `
    <div class="result-item">
      <strong>${item[0]}</strong>
      <p>${escapeHtml(String(item[1]))}</p>
    </div>
  `).join("");

  message.textContent = "Data berhasil disimpan dan ditampilkan.";
  message.className = "message success";
  resultCard.classList.remove("hidden");
  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
});

resetBtn.addEventListener("click", function() {
  form.reset();
  clearErrors();
  resultCard.classList.add("hidden");
});
